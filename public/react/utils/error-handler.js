export default {

    handleError: (error, message) => {
        if (error === 500) {
            App.router.errorUrl = location.href;
            App.router.errorMessage = message;
            App.router.navigate('error', {trigger: true, replace: true});
            return true;
        }
        else if (error === 401) {
            App.loggedOut();
        } else if (error === 400) {
            App.message.error(message || 'Oops, something went wrong.');
        } else if (error === 404) {
            App.message.error('The page you asked for does not exist.');
        } else {
            App.message.error(message);
        }

        return false;
    }
}