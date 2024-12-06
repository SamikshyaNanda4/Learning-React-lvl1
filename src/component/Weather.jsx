

const Weather = ({temperature}) => {

     
    if(temperature>35){
        return <div>It's warm outside</div>;
    }else if(temperature<20){
        return <div>It's cold outside</div>;
    }else{
        return <div>It's nice outside</div>;
    }
}

export default Weather;
