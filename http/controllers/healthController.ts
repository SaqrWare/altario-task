import {Request, Response} from "express";
import os from "os";

export const getHealthcheck = (req: Request, res: Response) => {
    const cpuUsage = os.loadavg()[0]; // unix average load  last minute
    const freeMemory = os.freemem(); // linux free memory
    res.json({cpuUsage, freeMemory});
}
