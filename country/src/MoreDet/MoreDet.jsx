import CountryCC from "../CountryCC/CountryCC";


const MoreDet = ({country , handleVisitedCounty}) => {
    return (
        <div>
          <h4>More Details</h4> 
          <CountryCC country={country} handleVisitedCounty={handleVisitedCounty}></CountryCC>
        </div>
    );
};

export default MoreDet;