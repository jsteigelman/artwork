import singlescoop from "../Components/Images/singlescooplowq.jpg";
import hologram_winsornewton from "../Components/Images/hologram_winsor.jpg";
import sunsetpurple from "../Components/Images/sunset_purple.jpg";
import bills from "../Components/Images/bills.png";
import pinkgreen from "../Components/Images/neon_pinkgreen_light_large.jpg";
import boxpurple from "../Components/Images/box_purple.jpg";
import dusk from "../Components/Images/dusk.jpg";
import bills_two from "../Components/Images/acrylic_podium.jpg";
import sunsetred from "../Components/Images/sunset_red.jpg";
import boxblue from "../Components/Images/box_blue.jpg";

export const getArtworkData = () => {
    return {
        singlescoop: {
            title: 'Single Scoop (Strawberry Ice Cream Cone)',
            date: '2019',
            medium: 'acrylic resin and encapsulated object',
            image: singlescoop
        }, 
        hologram_winsor_newton: {
            title: 'Three Tubes of Winsor & Newton Paint',
            date: '2019',
            medium: 'hologram',
            image: hologram_winsornewton
        }, 
        sunset_june2017: {
            title: 'Sunset (19 June 2017)',
            date: '2018',
            medium: 'neon tubing and wire with suspension frame',
            image: sunsetpurple
        }, 
        three_one_dollar_bills: {
            title: 'Three One-Dollar Bills',
            date: '2018',
            medium: 'acrylic resin and dollar bills',
            image: bills
        }, 
        pink_green: {
            title: 'Pink/Green',
            date: '2017',
            medium: 'neon tubing and wire',
            image: pinkgreen
        }, 
        lightbox_purple: {
            title: 'Light Box XVI',
            date: '2019',
            medium: 'mirrored acrylic with neon tubing and wire',
            image: boxpurple
        }, 
        dusk: {
            title: 'Dusk',
            date: '2019',
            medium: 'neon tubing and wire',
            image: dusk
        }, 
        three_one_dollar_bills_secondrow: {
            title: 'Three One-Dollar Bills',
            date: '2018',
            medium: 'acrylic resin and dollar bills',
            image: bills_two
        }, 
        sunset_april2018: {
            title: 'Sunset (8 April 2018)',
            date: '2018',
            medium: 'neon tubing and wire with suspension frame',
            image: sunsetred
        }, 
        lightbox_blue: {
            title: 'Light Box VI',
            date: '2017',
            medium: 'mirrored acrylic with neon tubing and wire',
            image: boxblue
        }, 
    }
}