import { Request, Response } from 'express';
import { Controller, Get, Put, Post, Delete } from '@overnightjs/core';
import { OK, INTERNAL_SERVER_ERROR } from 'http-status-codes';
import { Logger } from '@overnightjs/logger';
import { ExampleService } from '../services/example.service';

@Controller('example')
export class ExampleController {

    private service: ExampleService = new ExampleService();

    @Get('')
    private getExample(req: Request, res: Response) {
        let example = this.service.GetExample();
        Logger.Info(example);
        return res.status(OK).json(example);
    }

    @Put('')
    private putExample(req: Request, res: Response) {
        let isOk = this.service.SetExample("Putting...");
        Logger.Info("Put Successful? " + isOk);
        if (isOk) {
            return res.status(OK).json(isOk);
        } else {
            return res.status(INTERNAL_SERVER_ERROR).json(isOk);
        }
    }

    @Post('')
    private postExample(req: Request, res: Response) {
        let isOk = this.service.SetExample("Posting...");
        Logger.Info("Post Successful? " + isOk);
        if (isOk) {
            return res.status(OK).json(isOk);
        } else {
            return res.status(INTERNAL_SERVER_ERROR).json(isOk);
        }
    }
    
    @Delete('')
    private deleteExample(req: Request, res: Response) {
        let isOk = this.service.ClearExample();
        Logger.Info("Post Successful? " + isOk);
        if (isOk) {
            return res.status(OK).json(isOk);
        } else {
            return res.status(INTERNAL_SERVER_ERROR).json(isOk);
        }
    };
}