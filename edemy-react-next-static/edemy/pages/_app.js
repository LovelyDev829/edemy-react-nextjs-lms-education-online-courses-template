import "../styles/bootstrap.min.css";
import "../styles/animate.min.css";
import "../styles/boxicons.min.css";
import "../styles/meanmenu.min.css";
import "../styles/flaticon.css";
import "../node_modules/react-modal-video/css/modal-video.min.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "react-tabs/style/react-tabs.css";
import 'react-18-image-lightbox/style.css';
import "swiper/css";
import "swiper/css/bundle";

// Global Styles
import "../styles/style.css";
// Global Responsive Styles
import "../styles/responsive.css";

import Layout from "../components/_App/Layout";

const MyApp = ({ Component, pageProps }) => {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
};

export default MyApp;
