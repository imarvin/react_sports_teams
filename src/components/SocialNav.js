import React, { useContext } from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { TeamContext } from '../context/TeamContext';

const SocialNav = () => {
    const { team } = useContext(TeamContext);
    return (
        <div className="nav__social">
            <ul className="nav__social-ul">
                <li className="nav__social-facebook">
                    <a href={`//${team.strFacebook}`} ><FacebookIcon /></a>
                </li>
                <li className="nav__social-instagram">
                    <a href={`//${team.strInstagram}`} ><InstagramIcon /></a>
                </li>
                <li className="nav__social-twitter">
                    <a href={`//${team.strTwitter}`} ><TwitterIcon /></a>
                </li>
                <li className="nav__social-youtube">
                    <a href={`//${team.strYoutube}`} ><YouTubeIcon /></a>
                </li>
            </ul>
        </div>
    )
}

export default SocialNav;
