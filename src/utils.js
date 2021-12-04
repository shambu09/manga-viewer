const metadata_url =
	"https://manga-utils-server.herokuapp.com/get_metadata?file_id=1Jq5rdZUO6NpB16jFHRgdWQdeOYtpHi1h";

const get_public_link = (file_id) => {
	return `https://manga-utils-server.herokuapp.com/get_metadata?file_id=${file_id}`;
};

export { get_public_link, metadata_url };
