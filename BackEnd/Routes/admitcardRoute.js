const { Router } = require("express");


const { AdmitcardModel } = require("../Models/admitcard.model");

const AdmitcardRouter = Router();

AdmitcardRouter.get('/', async (req, res) => {
  try {
    let data = await AdmitcardModel.find({})

    res.send(data)
  } catch (error) {
    console.log(error);
  }
})


AdmitcardRouter.get("/:id", async (req, res) => {
  const { id } = req.params
  try {
    const data = await AdmitcardModel.find({ "_id": id })
    res.send(data)

  } catch (error) {
    res.send(error)
  }
})



AdmitcardRouter.post("/add", async (req, res) => {
  try {
    const data = new AdmitcardModel(req.body);
    await data.save();
    res.send("data is added");
  } catch (error) {
    res.send(error);
  }
});



//delete

AdmitcardRouter.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;

  try {
    await AdmitcardModel.findByIdAndDelete({ _id: id });
    res.send("product deleted successfully");
  } catch (error) {
    res.send({ msg: "something went wrong", error: error.message });
  }
});



module.exports = { AdmitcardRouter };
