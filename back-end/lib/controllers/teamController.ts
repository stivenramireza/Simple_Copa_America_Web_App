import * as mongoose from 'mongoose';
import { TeamSchema } from '../models/teamModel';
import { Request, Response } from 'express';

const Team = mongoose.model('Team', TeamSchema);

export class TeamController{

public addNewTeam (req: Request, res: Response) {                
        let newTeam = new Team(req.body);
    
        newTeam.save((err, team) => {
            if(err){
                res.send(err);
            }    
            res.json(team);
        });
}

public getTeams (req: Request, res: Response) {           
    Team.find({}, (err, team) => {
        if(err){
            res.send(err);
        }
        res.json(team);
    });
}

public getTeamWithID (req: Request, res: Response) {           
    Team.findById(req.params.teamId, (err, team) => {
        if(err){
            res.send(err);
        }
        res.json(team);
    });
}

public updateTeam (req: Request, res: Response) {           
    Team.findOneAndUpdate({ _id: req.params.teamId }, req.body, { new: true }, (err, team) => {
        if(err){
            res.send(err);
        }
        res.json(team);
    });
}

public deleteTeam (req: Request, res: Response) {           
    Team.remove({ _id: req.params.teamId }, (err, eam) => {
        if(err){
            res.send(err);
        }
        res.json({ message: 'Successfully deleted team!'});
    });
}

}