import React from 'react';
import '../../Styles/Project.css';

function Project() {

    return (
        <div>
            <h2 id="Work">Projects</h2>
            <div className="project-container">
                <div id="work-box1">
                    <p>Your Plant House!</p>
                    <p><a id="work-link1" href="https://project-2-your-plant-house.herokuapp.com/"></a></p>
                </div>
                <p><a id="github-link1" href="https://github.com/Adeamer/Your-Plant-House">Click here for Git-Hub Repository</a></p>

                <div id="work-box2">
                    <p>News/ Media Aggregator</p>
                    <p><a id="work-link2" href="https://adeamer.github.io/Week-7-Project/Index"></a></p>
                </div>
                <p><a id="github-link2" href="https://github.com/Adeamer/Week-7-Project">Click here for Git-Hub Repository</a></p>

                <div id="work-box3">
                    <p>Work Day Planner</p>
                    <p><a id="work-link3" href="https://adeamer.github.io/Week-5-Work-day-Schedule/"></a></p>
                </div>
                <p><a id="github-link3" href="https://github.com/Adeamer/Week-5-Work-day-Schedule">Click here for Git-Hub Repository</a></p>

                <div id="work-box4">
                    <p>Weather Dashboard</p>
                    <p><a id="work-link4" href="https://adeamer.github.io/Week6-Weather-Dashboard/"></a></p>
                </div>
                <p><a id="github-link4" href="https://github.com/Adeamer/Week6-Weather-Dashboard">Click here for Git-Hub Repository</a></p>
                <br></br>
                <br></br>
            </div>

        </div>
    );
}

export default Project;