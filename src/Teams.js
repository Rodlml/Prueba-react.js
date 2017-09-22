import React from 'react';

import './bootstrap-4.0.0-beta/dist/css/bootstrap.min.css';
import '../node_modules/material-components-web/dist/material-components-web.css';
import './Teams.css';

import add from './img/add.png';

class Team extends React.Component{
	render(){
		return(
			<div>
			<a href="#" className="team-row list-group-item-action flex-column align-items-start">
					<div className="row item">
						<div className="col-md-2 col-sm-2 vcenter">
							<img src={this.props.team.img} className="th" alt=""/>
						</div>
						<div className="col-md-6 col-sm-6">
							<span className="team-name">{this.props.team.name}</span><br/>
							<span className="team-url">{this.props.team.url}</span>
						</div>
						<div className="col-md-4 col-sm-4">
							<center><p className="ml-auto team-not text.info">{this.props.team.notifications} Notifications!</p></center>
						</div>
					</div>
			</a><div className="divider"></div><br/></div>
		);
	}
}

class Teams extends React.Component{

	renderTeams(teams){
		if(teams.length > 0){
			return teams.map((team, index) => (
				<Team key={index} team={team} />

			));
		} else return [];
	}

	render(){
		return(
			<div className="container">
				<div className="row">
					<div className="col"></div>
					<div className="mdc-card col-md-6 col-sm-10">
					  <section className="mdc-card__primary">
					    <h1 className="title-text mdc-card__title mdc-card__title--large">WHICH TEAM DO YOU WANT TO LOG IN?</h1>
					    <br/>
					  </section>
					  <div className="container">
					  	<div className="row justify-content-center">
					  		<div className="col"></div>
					  		<div className="col-10">
					  			<div className="list-group ">
									{this.renderTeams(this.props.teams)}
									<a href="#" className="team-row list-group-item-action flex-column align-items-start">
										<div className="row item">
											<div className="col-md-2 col-sm-2 vcenter">
												<img src={add} className="th" alt=""/>
											</div>
											<div className="col-md-6 col-sm-8 vcenter">
												<span className="add-team text-primary">Create New Team</span><br/>
											</div>
											<div className="col-md-4 col-sm-2">
											</div>
										</div>
								</a><br/>	
								</div>
					  		</div>
					  		<div className="col"></div>
					  	</div>
					  </div>
					  <center><button type="button" className="mdc-button align-center">
						Sign Out
					  </button></center><br/>
					</div>
					<div className="col"></div>
				</div>
			</div>
		);
	}
}

export default Teams;