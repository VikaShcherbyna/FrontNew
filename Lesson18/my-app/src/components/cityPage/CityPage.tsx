import{FC} from 'react'

const CityPage: FC=()=>(
    <div className='App'> 
        <h1>
            Berlin
        </h1>
        <p>capital of Geormany</p>
        <img 
        className="'berlinImg"
       /*  width={500}   вариант вручную*/
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Alexanderplatz_in_Berlin_-_Panorama.jpg/1200px-Alexanderplatz_in_Berlin_-_Panorama.jpg" alt="" />
    </div>
)

export default CityPage