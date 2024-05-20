import express from "express";
import mysql from "mysql2";
import cors from "cors";
import multer from "multer";
import path from "path";
import jwt from "jsonwebtoken";

// Configure multer for file storage
const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/uploads", express.static("uploads"));
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const upload = multer({
  dest: "uploads/",
  fileFilter: function (req, file, cb) {
    var filetypes = /jpeg|jpg|png|mp4/;
    var mimetype = filetypes.test(file.mimetype);
    if (mimetype) {
      return cb(null, true);
    }
    cb(
      "Error: File upload only supports the " +
        "following filetypes - " +
        filetypes
    );
  },
});

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: "3306",
  password: "mysql@2023",
  database: "estate",
});

db.connect((err) => {
  if (err) {
    console.log("error in database connection");
  }
  console.log("database connected successfully");
});

app.post("/create-listing", upload.single("images"), async (req, res) => {
  try {
    const {
      name,
      description,
      address,
      is_sell,
      is_rent,
      is_parking,
      is_furnished,
      is_offer,
      num_bedrooms,
      num_bathrooms,
      regular_price,
      discounted_price,
    } = req.body;
    const images = req.file.path;

    const query = `
      INSERT INTO createlisting (
        name, description, address, is_sell, is_rent, is_parking, is_furnished, is_offer, num_bedrooms, num_bathrooms, regular_price, discounted_price, image
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    `;

    db.query(
      query,
      [
        name,
        description,
        address,
        is_sell === "true" ? 1 : 0,
        is_rent === "true" ? 1 : 0,
        is_parking === "true" ? 1 : 0,
        is_furnished === "true" ? 1 : 0,
        is_offer === "true" ? 1 : 0,
        num_bedrooms,
        num_bathrooms,
        regular_price,
        discounted_price,
        JSON.stringify(images),
      ],
      (err, result) => {
        if (err) {
          console.error("Error inserting listing:", err);
          return res
            .status(500)
            .json({ error: "Internal server error", details: err.message });
        }
        console.log("Listing created successfully");
        res.status(201).json({
          message: "Listing created successfully",
          listingId: result.insertId,
        });
      }
    );
  } catch (error) {
    console.error("Error creating listing:", error);
    res.status(500).json({ error: "Failed to create listing" });
  }
});

app.get("/listings", async (req, res) => {
  try {
    const {
      search = "",
      all = "false",
      rent = "false",
      sale = "false",
      offer = "false",
      parking = "false",
      furnished = "false",
      sort_order = "Price high to low",
    } = req.query;

    let query = "SELECT * FROM createlisting WHERE 1=1";

    if (search) {
      query += ` AND (name LIKE ? OR description LIKE ?)`;
    }

    if (all === "true") {
      query += ` AND (is_sell=1 OR is_rent=1)`;
    } else {
      if (rent === "true") query += ` AND is_rent=1`;
      if (sale === "true") query += ` AND is_sell=1`;
    }

    if (offer === "true") query += ` AND is_offer=1`;
    if (parking === "true") query += ` AND is_parking=1`;
    if (furnished === "true") query += ` AND is_furnished=1`;

    switch (sort_order) {
      case "Price high to low":
        query += " ORDER BY regular_price DESC";
        break;
      case "Price low to high":
        query += " ORDER BY regular_price ASC";
        break;
      case "Latest":
        query += " ORDER BY id DESC";
        break;
      case "Oldest":
        query += " ORDER BY id ASC";
        break;
      default:
        break;
    }

    db.query(query, [`%${search}%`, `%${search}%`], (err, results) => {
      if (err) {
        console.error("Error fetching listings:", err);
        return res.status(500).json({ error: "Internal server error" });
      }
      res.status(200).json(results);
    });
  } catch (error) {
    console.error("Error fetching listings:", error);
    res.status(500).json({ error: "Failed to fetch listings" });
  }
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const sqlinsert = "select * from user where email=?";
  db.query(sqlinsert, [email], (err, data) => {
    if (err) {
      console.error("Error in database query:", err);
      return res.json({ Error: "Internal Email Error" });
    }

    if (email.trim() === "" || password.trim() === "") {
      return res.json({
        Status: "Error",
        Error: "Please enter both email and password.",
      });
    }
    if (data.length > 0) {
      try {
        const checkpass = req.body.password;
        const password = data[0].password;
        const compare = checkpass.localeCompare(password);
        console.log(compare);
        if (compare == 0) {
          // const token = jwt.sign(
          //   { email: req.body.email, password: data[0].password },
          //   "test",
          //   { expiresIn: "1h" }
          // );
          const token = jwt.sign(
            { email: data[0].email, name: data[0].name, id: data[0].id },
            "test",
            { expiresIn: "1h" }
          );
          const { password, ...others } = data[0];
          return res

            .cookie("AccessToken", token, {
              httpOnly: true,
              secure: true,
            })
            .status(200)
            .json({ Status: "Success", token });
          // return res.json({ Status: "Success", token });
        } else {
          return res.json({ Error: "Password not matched" });
        }
      } catch (error) {
        return res.json({ Error: `Internal Logging Error ${error}` });
      }
    } else {
      return res.json({ Error: "Email Not Existed" });
      // return res.json({Error:"Password not matched"})
    }
  });
});

app.listen(3001, () => {
  console.log("server is running port 3001");
});
