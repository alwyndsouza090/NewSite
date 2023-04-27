import React from 'react'
import Topbar from '../../components/Topbar'
import Mainbar from '../../components/Mainbar'
import Footer from '../../components/Footer'

const Disclaimer = () => {
  return (
    <>
    <Topbar/>
    <Mainbar/>
    <div style={{width:'100%',height:'15%',backgroundColor:'whitesmoke'}} className='text-center'><h3 className='h3' style={{color:'brown',fontSize:'bold',fontFamily:'sans-serif'}}>DISCLAIMER</h3></div>
<div className='container'>
    <p className='p'>If you require any more information or have any questions about our site's disclaimer, please feel free to contact us by email at cephasgranites@gmail.com
www.cephasgranites.com
All the information on this website - www.cephasgranites.com - is published in good faith and for general information purpose only. www.cephasgranites.com does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website (www.cephasgranites.com), is strictly at your own risk. www.cephasgranites.com will not be liable for any losses and/or damages in connection with the use of our website. From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone 'bad'. Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their "Terms of Service" before engaging in any business or uploading any information.
Consent
By using our website, you hereby consent to our disclaimer and agree to its terms.
Update
Should we update, amend or make any changes to this document, those changes will be prominently posted here.</p>
</div>
    <Footer/>
    </>
  )
}

export default Disclaimer