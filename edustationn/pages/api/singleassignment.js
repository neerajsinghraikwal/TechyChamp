import AssignmentModel from "../../server/models/assignment";
import connection from "../../server/config/database";
export default async function singleassignment(req, res) {
  await connection();
  const id = req.query._id;
  //   res.status(200).json(id);
  try {
    const assign = await AssignmentModel.find({ _id: id });
    console.log(assign);
    res.status(200).json(assign);
  } catch (err) {
    res.status(400);
  }
}
