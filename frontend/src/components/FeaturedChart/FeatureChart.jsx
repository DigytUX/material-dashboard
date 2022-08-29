import '../Chart/chart.scss'
import './featured.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';


export default function FeaturedChart(){
    return (
        <>
            <div className="featured chart shadow">
                <div className="top">
                    <h1 className="title">Total Profits</h1>
                    <MoreVertIcon />
                </div>
                <div className="bottom">

                </div>
            </div>
        </>
    )
}