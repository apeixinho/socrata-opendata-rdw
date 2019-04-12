# Socrata OpenData RDW Example

The proposed challenge is to use [RDW API](https://dev.socrata.com/foundry/opendata.rdw.nl/m9d7-ebf2) in order to fetch vehicle information, more specifically color, based on the license plate.

## Acceptance Criteria

- The API has a GET method for license plate
- The API gives the color of the corresponding vehicle as a response
- The API is publicly accessible;
- Use the Open Data to retrieve the required information API: https://dev.socrata.com/foundry/opendata.rdw.nl/m9d7-ebf2
- The runtime runs in a cloud environment;
- Source code of solution to deploy the runtime
- Deployment are automated

## Description

The application is deployed and available at: [Google Cloud Platform](https://socrata-opendata-rdw.appspot.com/)

It applies _Continuous and Automated Deployments_ when changes are pushed to the **master** branch

The following image describes a license plate submission (e.g. **0001ES** ) and consequent response

![RDW-App](rdw-app.png)
