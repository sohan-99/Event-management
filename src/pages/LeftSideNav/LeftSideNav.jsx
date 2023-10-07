import moment from 'moment';
const LeftSideNav = () => {
    return (
        <div>
            <h2>LeftSideNav</h2>
            <p>{moment().format("MMMM Do YYYY, h:mm:ss a")}</p>
        </div>
    );
};

export default LeftSideNav;