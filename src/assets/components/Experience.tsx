
interface experienceProps{
    date: string;
    company: string;
    position: string;
}
const Experience : React.FC<experienceProps> = ({date, company, position}) => {
    return (
        <div className="experience">
            <div className="top">
                <p className="date">-{date}</p>
                <p className="company">-{company}</p>
            </div>
            <p className="position">{position}</p>
        </div>
    );
};

export default Experience;