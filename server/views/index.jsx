import React, {Component} from 'react'

export default class Index extends Component {
    render() {
        const {
            apiUrl,
            assetsRoot,
            stats,
        } = this.props

        const config = {
            apiUrl
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
            <link rel="stylesheet" href="https://code.getmdl.io/1.2.1/material.indigo-pink.min.css"/>
            <link rel="stylesheet" href="/www/css/font-awesome.min.css"/>
            <link rel="stylesheet" href="/www/min/plugin-min.css"/>
            <link rel="stylesheet" href="/www/min/custom-min.css"/>
            <link rel="stylesheet" href={`${assetsRoot}/${stats.assetsByChunkName.main[1]}`} media="screen"/>

            <script defer src="https://code.getmdl.io/1.2.1/material.min.js"></script>
        </head>

        <body id="top" className="scrollspy">

        <div id="loader-wrapper">
            <div id="loader"></div>

            <div className="loader-section section-left"></div>
            <div className="loader-section section-right"></div>
        </div>

        Hello world!

        <div id="page-container"></div>

        <script src="www/min/plugin-min.js"></script>
        <script src="www/min/custom-min.js"></script>
        <script dangerouslySetInnerHTML={{__html: `window['APP_CONFIG'] = ${JSON.stringify(config)}`}}/>
        <script src={`${assetsRoot}/${stats.assetsByChunkName.vendor}`}/>
        {/*<script src={`${assetsRoot}/${stats.assetsByChunkName.main[0]}`}/>*/}
        </body>
        </html>
    }
}