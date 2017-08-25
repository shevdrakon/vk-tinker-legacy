import React, {Component} from 'react'

export default class Index extends Component {
    render() {
        const {
            apiUrl,
            assetsRoot,
            stats,
            vkAppId,
            user,
            status
        } = this.props

        const config = {
            apiUrl,
            vkAppId,
            user,
            status
        }

        return <html lang="en" className="html">
        <head>
            <meta charSet="utf-8"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"/>
            <meta name="theme-color" content="#2196F3"/>

            <title>Mommy's Treasure</title>

            <link rel="icon" type="image/x-icon" href="/www/favicon.ico"/>
            <link rel="shortcut icon" href="/www/favicon.ico"/>

            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
            <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css"/>

            <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700"/>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css"/>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>

            <link rel="stylesheet" href="/www/css/font-awesome.min.css"/>
            {/*<link rel="stylesheet" href="/www/min/plugin-min.css"/>*/}
            {/*<link rel="stylesheet" href="/www/min/custom-min.css"/>*/}
            <link rel="stylesheet" href={`${assetsRoot}/${stats.assetsByChunkName.main[1]}`} media="screen"/>
        </head>

        <body id="top" className="scrollspy">

        <div className="wrapper">
            <div id="page-container"></div>
        </div>

        {/*<script src="/www/min/plugin-min.js"></script>*/}
        {/*<script src="/www/min/custom-min.js"></script>*/}

        <script dangerouslySetInnerHTML={{__html: `window['APP_CONFIG'] = ${JSON.stringify(config)}`}}/>
        <script src={`${assetsRoot}/${stats.assetsByChunkName.vendor}`}/>
        <script src={`${assetsRoot}/${stats.assetsByChunkName.main[0]}`}/>

        <script src="https://code.getmdl.io/1.3.0/material.js"></script>
        {/*<script src="/js/material.min.js" type="text/javascript"></script>*/}
        {/*<script src="/js/jquery.min.js" type="text/javascript"></script>*/}
        {/*<script src="/js/bootstrap.min.js" type="text/javascript"></script>*/}
        {/*<script src="/js/bootstrap-datepicker.js" type="text/javascript"></script>*/}
        {/*<script src="/js/nouislider.min.js" type="text/javascript"></script>*/}
        {/*<script src="/js/material-kit.js" type="text/javascript"></script>*/}

        </body>
        </html>
    }
}