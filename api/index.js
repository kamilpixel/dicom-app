const dcmjsDimse = require('dcmjs-dimse');
const { Client } = dcmjsDimse;
const { CFindRequest } = dcmjsDimse.requests;
const { Status } = dcmjsDimse.constants;
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// GET patients list
app.get('/patients', async function (req, res) {
  let collections = [];
  const client = new Client();
  const request = CFindRequest.createStudyFindRequest({});

  request.on('response', async (response) => {
    if (response.getStatus() === Status.Pending && response.hasDataset()) {
      let patient = await response.getDataset();
      patient = {
        specificCharacterSet: patient.elements.SpecificCharacterSet,
        studyDate: patient.elements.StudyDate,
        studyTime: patient.elements.StudyTime,
        accessionNumber: patient.elements.AccessionNumber,
        queryRetrieveLevel: patient.elements.QueryRetrieveLevel,
        retrieveAETitle: patient.elements.RetrieveAETitle,
        modalitiesInStudy: patient.elements.ModalitiesInStudy,
        studyDescription: patient.elements.StudyDescription,
        patientName: patient.elements.PatientName,
        patientID: patient.elements.PatientID,
        patientBirthDate: patient.elements.PatientBirthDate,
        patientSex: patient.elements.PatientSex,
        studyInstanceUID: patient.elements.StudyInstanceUID,
      };
      collections.push(patient);
    }
  });

  client.on('networkError', (e) => {
    console.log('Network error: ', e);
  });

  client.addRequest(request);
  client.send(process.env.DICOM_SERVER_URL, process.env.DICOM_SERVER_PORT, '', '');

  client.on('closed', (response) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(collections));
  });

});

export default {
  path: '/api',
  handler: app
}