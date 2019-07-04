import {Request, Response} from "express";
import { TeamController } from '../controllers/teamController';

export class Routes { 
    
    public teamController: TeamController = new TeamController() 
    
    public routes(app): void {   
        
        app.route('/')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                message: 'Principal Page'
            })
        })
        
        // Team 
        app.route('/team')
        .get(this.teamController.getTeams)      
        .post(this.teamController.addNewTeam)

        // Team detail
        app.route('/team/:teamId')
        .get(this.teamController.getTeamWithID)
        .put(this.teamController.updateTeam)
        .delete(this.teamController.deleteTeam)

        // Redirect to Principal Page
        app.route('/redirect')
        .get((req: Request, res: Response) => {            
            res.redirect('http://localhost:3000/');
        })

    }
}