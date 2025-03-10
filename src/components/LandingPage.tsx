import React from 'react';
import generateWeeks from '../utils/generateWeeks';
import './LandingPage.css';

// the types for the props that are used: 
interface Week {
    weekNumber: string;
    startDate: string;
    endDate: string;
}

const LandingPage = () => {
    // call to the generateWeeks function to get an array of weeks:
    const weeks: Week[] = generateWeeks();
    return (
        <div>
            <h1 className="file-cabinet">Weekly Compliance Schedule</h1>
            <div className="weeks-container">
                {weeks.map((week, index) => (
                    <div className="week-card" key={index}>
                        <h3>{week.weekNumber}</h3>
                        <p>{week.startDate} - {week.endDate}</p>
                        <button onClick={() => alert(`Week ${index +1} clicked!`)}>Open</button>
                        </div>
                ))}
            </div>
        </div>
    );
};

export default LandingPage;