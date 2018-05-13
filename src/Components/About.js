import React from 'react';
import '../css/style.css';
import '../css/about.css';

class About extends React.Component {
    render() {
        return (
        
        <div id="Trans">
        <div class="gallery">
            <div className="aboutus">
            <h1 class="stats"> About Us</h1>
            <p>We are a non-for-profit organization tasked with providing and <br></br>
                maintaining a disaster shelter locator for the residents of NYC. <br></br>
                In the event of a hurricane or other natural disasters, <br></br>
                residents of NYC will be able to locate and reserve a  <br></br>
                spot for their families at a nearby shelter. 
                </p>
            <h4><i>Your Safety is our Priority</i></h4>    
            </div>

                <div class="thumbnail">
                <img src={require('../images/realtime.png')} alt='' width='70' height='70'/>
                    <h4>REAL TIME</h4>
                    <p>Our shelters are always up to date. Our database provides current
                        updates on all disaster shelters so that any changes in information
                        are immediately reflected on our website. </p>
                </div>
                <div class="thumbnail">
                <img src={require('../images/form.png')} alt='' width='70' height='70'/>
                    <h4>CONSOLIDATED FORMS</h4>
                    <p>Our shelter reservation form allows you to not only check the status
                        of the available shelters but also register at the shelter 
                        of your choice. Your submissions are securely entered into our
                        database and a notification email is sent out promptly after. </p>
                </div>
                <div class="thumbnail">
                <img src={require('../images/search.png')} alt='' width='70' height='70'/>
                    <h4>SEAMLESS SEARCH</h4>
                    <p>Our search system utilizes the Google API to provide you quick and
                        accurate search results on matching shelters for your convenience.
                    </p>
                </div>
                <div class="thumbnail">
                <img src={require('../images/computer.png')} alt='' width='70' height='70'/>
                    <h4>Responsive</h4>
                    <p>Our user-friendly website is robustly built to handle large amounts 
                        of traffic to ensure access during emergencies. Our pages are not 
                        only responsive but effective at getting you registered at your
                        local shelter as quickly as possible.
                    </p>
                </div>
                <br/>
                <div className="contact">
                    <h2 class="stats">Contact Us</h2>
                    <p> If you have any questions or feedback, 
                        you can reach us at: <br>
                    </br>   25TH ST NY, NEW YORK 10010 <br>
                    </br>   123.456.789  <br>
                    </br>  INFO@SHELTERSNYC.COM  </p>
                </div>
            </div>
            </div>
            
        )
    }
}

export default About;