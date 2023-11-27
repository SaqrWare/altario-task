import express from 'express';
import router from "./http/route";

const app = express();

// Get port from env variable `PORT`
const port = process.env.PORT || 3000;


// Setup routes
app.use("/", router)


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

// Exported for integration test
export default app;