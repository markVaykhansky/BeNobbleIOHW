import { app } from "./app.mjs";
import { ClassNameGenerator } from "./BL/class-names-generator.mjs";
import { ClassNameClient } from "./class-name-client/class-name-client.mjs";

const classNameClient = new ClassNameClient();
const classNameGenerator = new ClassNameGenerator();

app.get("/classname", async (req, res) => {
    const classNameComponents = await classNameClient.getClassNameComponents();

    return 5;
});

app.get("/classnames", async (req, res) => {

})
