// compatibilityCheck.js
import xml2js from 'xml2js';

const compatibleDependencies = {

    'org.mule.connectors:mule-amazon-dynamodb-connector': '1.5.2',
  
    'org.mule.connectors:mule-amazon-ec2-connector': '2.5.7',
  
    'org.mule.connectors:mule-amazon-rds-connector': '1.3.9',
  
    'org.mule.connectors:mule-amazon-redshift-connector': '1.0.10',
  
    'org.mule.connectors:mule-amazon-secrets-manager-properties-provider': '1.0.1',
  
    'org.mule.connectors:mule-amazon-sns-connector': '4.7.5',
  
    'org.mule.connectors:mule-amazon-sqs-connector': '5.11.12',
  
    'org.mule.connectors:mule-amazon-s3-connector': '6.3.6',
  
    'org.mule.connectors:mule-amqp-connector': '1.7.7',
  
    'org.mule.connectors:mule-anypoint-custom-metrics-connector': '2.3.0',
  
    'org.mule.connectors:mule-anypoint-mq-connector': '4.0.4',
  
    'org.mule.connectors:mule-apache-kafka-connector': '4.7.5',
  
    'org.mule.connectors:mule-apikit': '1.10.0',
  
    'org.mule.connectors:mule-as2-connector': '6.7.0',
  
    'org.mule.connectors:mule-asana-connector': '1.0.8',
  
    'org.mule.connectors:mule-azure-cosmos-db-connector': '1.0.4',
  
    'org.mule.connectors:mule-azure-data-lake-storage-connector': '1.0.4',
  
    'org.mule.connectors:mule-microsoft-azure-storage-connector': '3.0.0',
  
    'org.mule.connectors:mule-azure-key-vault-properties-provider': '2.0.1',
  
    'org.mule.connectors:mule-azure-service-bus-connector': '3.2.8',
  
    'org.mule.connectors:mule-azure-service-bus-management-connector': '1.0.3',
  
    'org.mule.connectors:mule-box-connector': '5.2.4',
  
    'org.mule.connectors:mule-cloudhub-connector': '1.2.0',
  
    'org.mule.connectors:mule-compression-module': '2.2.3',
  
    'org.mule.connectors:mule-confluent-schema-registry-connector': '1.0.11',
  
    'org.mule.connectors:mule-cryptography-module': '1.3.17',
  
    'org.mule.connectors:mule-database-connector': '1.14.8',
  
    'org.mule.connectors:mule-data-cloud-connector': '1.2.0',
  
    'org.mule.connectors:mule-docusign-connector': '1.0.6',
  
    'org.mule.connectors:mule-dropbox-connector': '1.0.8',
  
    'org.mule.connectors:mule-edifact-edi-connector': '2.9.0',
  
    'org.mule.connectors:mule-email-connector': '1.7.3',
  
    'org.mule.connectors:mule-file-connector': '1.5.2',
  
    'org.mule.connectors:mule-ftp-connector': '1.8.6',
  
    'org.mule.connectors:mule-google-calendar-connector': '1.2.3',
  
    'org.mule.connectors:mule-google-drive-connector': '1.1.3',
  
    'org.mule.connectors:mule-google-pub-sub-connector': '1.0.7',
  
    'org.mule.connectors:mule-google-sheets-connector': '1.1.12',
  
    'org.mule.connectors:mule-hadoop-connector': '6.0.25',
  
    'org.mule.connectors:mule-hl7-edi-connector': '4.2.12',
  
    'org.mule.connectors:mule-hl7-mllp-connector': '2.1.6',
  
    'org.mule.connectors:mule-http-connector': '1.9.0',
  
    'org.mule.connectors:mule-ibm-mq-connector': '1.6.22',
  
    'org.mule.connectors:mule-intercom-connector': '1.0.5',
  
    'org.mule.connectors:mule-java-module': '1.2.12',
  
    'org.mule.connectors:mule-java-message-service-connector': '1.9.2',
  
    'org.mule.connectors:mule-jira-connector': '1.2.9',
  
    'org.mule.connectors:mule-json-module': '2.5.0',
  
    'org.mule.connectors:mule-ldap-connector': '3.5.6',
  
    'org.mule.connectors:mule-mailchimp-connector': '1.0.4',
  
    'org.mule.connectors:mule-microsoft-dynamics-365-business-central-connector': '1.0.3',
  
    'org.mule.connectors:mule-microsoft-dynamics-365-cloud-connector': '2.6.8',
  
    'org.mule.connectors:mule-microsoft-excel-online-connector': '1.1.1',
  
    'org.mule.connectors:mule-microsoft-messaging-queuing-connector': '2.1.1',
  
    'org.mule.connectors:mule-microsoft-onedrive-connector': '1.1.2',
  
    'org.mule.connectors:mule-microsoft-outlook-365-connector': '1.2.3',
  
    'org.mule.connectors:mule-microsoft-teams': '1.1.4',
  
    'org.mule.connectors:mule-microsoft-windows-powershell-connector': '2.1.3',
  
    'org.mule.connectors:mule-mongodb-connector': '6.3.9',
  
    'org.mule.connectors:mule-neo4j-connector': '3.0.7',
  
    'org.mule.connectors:mule-netsuite-connector': '11.8.1',
  
    'org.mule.connectors:mule-netsuite-openair-connector': '2.0.11',
  
    'org.mule.connectors:mule-netsuite-restlet-connector': '1.0.9',
  
    'org.mule.connectors:mule-object-store-connector': '1.2.2',
  
    'org.mule.connectors:mule-oauth-module': '1.1.21',
  
    'org.mule.connectors:mule-oauth2-provider-module': '1.0.13',
  
    'org.mule.connectors:mule-oracle-ebs-12.2': '2.3.0',
  
    'org.mule.connectors:mule-power-bi-connector': '1.0.4',
  
    'org.mule.connectors:mule-redis-connector': '5.4.3',
  
    'org.mule.connectors:mule-rosettanet-connector': '2.0.22',
  
    'org.mule.connectors:mule-salesforce-connector': '10.19.2',
  
    'org.mule.connectors:mule-salesforce-composite-connector': '2.16.1',
  
    'org.mule.connectors:mule-salesforce-einstein-analytics-connector': '3.14.1',
  
    'org.mule.connectors:mule-salesforce-marketing-cloud-rest-connector': '1.2',
  
    'org.mule.connectors:mule-salesforce-marketing-cloud-soap-connector': '3.2.13',
  
    'org.mule.connectors:mule-sap-connector': '5.9.3',
  
    'org.mule.connectors:mule-sap-concur-connector': '4.2.3',
  
    'org.mule.connectors:mule-sap-s4hana-odata-connector': '2.6.1',
  
    'org.mule.connectors:mule-sap-s4hana-soap-connector': '2.5.1',
  
    'org.mule.connectors:mule-sap-successfactors-connector': '4.1.9',
  
    'org.mule.connectors:mule-secure-configuration-properties-extension': '1.2.7',
  
    'org.mule.connectors:mule-servicenow-connector': '6.14.1',
  
    'org.mule.connectors:mule-sftp-connector': '2.0.3',
  
    'org.mule.connectors:mule-sharepoint-connector': '3.6.0',
  
    'org.mule.connectors:mule-shopify-connector': '1.1.9',
  
    'org.mule.connectors:mule-slack-connector': '1.0.17',
  
    'org.mule.connectors:mule-smartsheet-connector': '1.2.4',
  
    'org.mule.connectors:mule-snowflake-connector': '1.1.3',
  
    'org.mule.connectors:mule-sockets-connector': '1.2.4',
  
    'org.mule.connectors:mule-spring-module': '1.3.11',
  
    'org.mule.connectors:mule-stripe-connector': '1.0.13',
  
    'org.mule.connectors:mule-scripting-module': '2.1.0',
  
    'org.mule.connectors:mule-tableau-connector': '1.1.3',
  
    'org.mule.connectors:mule-tracing-module': '1.1.0',
  
    'org.mule.connectors:mule-tradacoms-edi-connector': '2.0.7',
  
    'org.mule.connectors:mule-twilio-connector': '4.2.7',
  
    'org.mule.connectors:mule-validation-module': '2.0.6',
  
    'org.mule.connectors:mule-veeva-vault-connector': '1.5.3',
  
    'org.mule.connectors:mule-virtual-machine-connector': '2.0.1',
  
    'org.mule.connectors:mule-websockets-connector': '1.0.1',
  
    'org.mule.connectors:mule-workday-connector': '16.0.2',
  
    'org.mule.connectors:mule-web-service-consumer-connector': '1.8.6',
  
    'org.mule.connectors:mule-wss-module': '1.2.0',
  
    'org.mule.connectors:mule-x12-edi-connector': '2.14.0',
  
    'org.mule.connectors:mule-xml-module': '1.4.2',
  
    'org.mule.connectors:mule-zendesk-connector': '1.1.8',
  
    'org.mule.connectors:mule-zoom-connector': '1.0.4',
  
    'org.mule.connectors:mule-zuora-connector': '6.0.11',
  
    'org.mule.connectors:mule-zuora-aqua-connector': '1.0.11',
  
    'org.mule.modules:mule-apikit-module': '1.10.0',
  
  };

function checkCompatibility(files, callback) {
    const invalidCompatibilities = [];
    const parser = new xml2js.Parser();

    const promises = files.map((file) => {
        return new Promise((resolve, reject) => {
            parser.parseString(file.data, (err, result) => {
                if (err) {
                    reject(`Error parsing file: ${file.name}`);
                    return;
                }

                const dependencies = result.dependencies?.dependency || [];
                dependencies.forEach(dep => {
                    const depName = dep.name[0];
                    const depVersion = dep.version[0];

                    if (compatibleDependencies[depName]) {
                        if (depVersion < compatibleDependencies[depName]) {
                            invalidCompatibilities.push(
                                `Incompatible version for ${depName}: ${depVersion}. Required version ${compatibleDependencies[depName]} or higher.`
                            );
                        }
                    } else {
                        invalidCompatibilities.push(`Dependency (${depName}) is not listed in the compatibility requirements.`);
                    }
                });

                resolve();
            });
        });
    });

    Promise.all(promises).then(() => {
        if (invalidCompatibilities.length === 0) {
            invalidCompatibilities.push("All dependencies are compatible.");
        }
        callback(invalidCompatibilities);
    }).catch((err) => {
        console.error('Error processing files:', err);
        invalidCompatibilities.push("An error occurred during compatibility check.");
        callback(invalidCompatibilities);
    });
}

export default { checkCompatibility };
