import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className='img'>
        <div className="token">
            <h2 className='tokenb'>TOKEN BALANCE</h2>
        <img src="/images/Line 1.png" alt="" className='line1'/>
        <h2 className='money'>$123456

        </h2>
        <button className='add'>+ADD FUNDS</button>
        <button className='remove'>REMOVE FUNDS</button>
        
        </div>
        <div className="balance">
        <h2 className='tokenb'>GAME BALANCE</h2>
        <img src="/images/Line 1.png" alt="" className='line1'/>
        <h2 className='money'>$123456

</h2>
<button className='add'>+ADD FUNDS</button>
        <button className='remove'>REMOVE FUNDS</button>
        </div>
        <div className="dashboard">
            <h2 className='tokenb'>DASHBOARD</h2>
        <img src="/images/Line 1.png" alt="" className='line2'/>
        <img src="/images/Image 27.png" alt="" className='avatar' />
        
            <h3 className='name'>Gusorball0203</h3>

        <img src="/images/Group 2491.png" alt=""  className='chart'/>
        <img src="/images/Ellipse 26.png" alt=""  className='orange'/>
        <h6 className='win'>Win</h6>
        <img src="/images/Ellipse 27.png" alt=""  className='green'/>
        <h6 className='walkover'>Walkover</h6>
        <img src="/images/Ellipse 28.png" alt=""  className='purple'/>
        <h6 className='loss'>Loss</h6>
        <img src="/images/Line 7.png" alt="" className='hline'/>
        <h6 className='winn'>Win</h6>
        <h1 className='winno'>50</h1>
        <h6 className='lossn'>Loss</h6>
        <h1 className='lossno'>45</h1>
        <h6 className='walkovern'>Walkover</h6>
        <h1 className='walkoverno'>5</h1>
        <h6 className='kills'> Best Career High</h6>
        <h1 className='killsno'>14</h1>
        <h6 className='earning'> Earnings</h6>
        <h1 className='earningno'>$248,20</h1>
        <h6 className='losses'>Losses</h6>
        <h1 className='earninglost'>$232,32</h1>
        <img src="/images/Line 7.png" alt="" className='hline1'/>
        <h6 className='rankheading1'>RANK</h6>
        <h1 className='rankhno'>23</h1>
        <img src="/images/Line 1.png" alt="" className='line3'/>
<br />
<div className="ratings">

<span span  className='gamename'>Fire Room</span>  <img src="/images/Path 1128.png" alt="" /> <img src="/images/Path 1128.png" alt="" /> <img src="/images/Path 1128.png" alt="" /> 
<br />
<span span  className='gamename'>Ice Room</span>  <br />
<span span  className='gamename'>Shadow Room</span><img src="/images/Path 1128.png" alt="" />  <br />
<span span  className='gamename'>Vault Room</span> <img src="/images/Path 1128.png" alt="" /> <br />
</div>
        </div>
        </div>
  )
}

export default Dashboard