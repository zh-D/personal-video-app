const router = require("express").Router();
const List = require("../models/List");
const verify = require("../verifyToken");

//CREATE

router.post("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    console.log(req.body);
    const newList = new List(req.body);

    try {
      const savedList = await newList.save();
      res.status(201).json(savedList);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
});

// //UPDATE

router.put("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      console.log(req.params.id);
      const updatedList = await List.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedList);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
});

// //DELETE

router.delete("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await List.findByIdAndDelete(req.params.id);
      res.status(201).json("The list has been delete...");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
});

//GET

router.get("/", verify, async (req, res) => {
  const typeQuery = req.query.type;
  const genreQuery = req.query.genre;
  const { page, size } = req.query
  let lists = [];
  console.log(page, size);



  try {
    // 如果 page && size，则对应管理系统的分页查询
    if (page && size) {
      // if (req.user.isAdmin) {
      //   console.log("jll");
      //   try {
      //     const listsCount = await List.countDocuments()
      //     console.log("ListCount", listsCount);
      //     lists = await List.aggregate([
      //       { $skip: size * (page - 1) },
      //       { $limit: +size }
      //     ]);
      //     return res.status(200).json({ count: listsCount, results: lists });
      //   } catch (err) {

      //     console.log(err)
      //     res.status(500).json(err);
      //   }
      // } else {
      //   res.status(403).json("You are not allowed!");
      // }
      // 对应 typeQuery 和 genreQuery 的四种情况
      try {
        const listsCount = await List.countDocuments()
        console.log("ListCount", listsCount);
        lists = await List.aggregate([
          { $skip: size * (page - 1) },
          { $limit: +size }
        ]);
        return res.status(200).json({ count: listsCount, results: lists });
      } catch (err) {

        console.log(err)
        res.status(500).json(err);
      }
    } else {
      // 否则对应网站的查询，根据 typeQuery && genreQuery，有四种情况
      if (typeQuery && genreQuery) {
        lists = await List.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: typeQuery, genre: genreQuery } }
        ]);
      } else {
        if (!typeQuery && !genreQuery) {
          lists = await List.aggregate([
            { $sample: { size: 10 } }
          ]);
        }
        if (typeQuery) {
          lists = await List.aggregate([
            { $sample: { size: 10 } },
            { $match: { type: typeQuery } }
          ]);
        }

        if (genreQuery) {
          lists = await List.aggregate([
            { $sample: { size: 10 } },
            { $match: { genre: genreQuery } }
          ]);
        }
      }
      res.status(200).json(lists);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
