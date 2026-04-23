const bitemporalTablePgsqlString = `CREATE TABLE <SCHEMA_NAME>.<TABLE_NAME> (
    version_id UUID PRIMARY KEY
    DEFAULT gen_random_uuid(),

    id UUID NOT NULL,

    ... <ATTRIBUTES> ...,

    effective_period TSTZRANGE NOT NULL
    DEFAULT tstzrange(now(), NULL, '[)'),
    assertive_period TSTZRANGE NOT NULL
    DEFAULT tstzrange(now(), NULL, '[)'),

    EXCLUDE USING gist (
        id WITH =,
        effective_period WITH &&,
        assertive_period WITH &&
    )
    WHERE (upper_inf(assertive_period)),
    CHECK (NOT isempty(effective_period)),
    CHECK (NOT isempty(assertive_period))
);`

const bitemporalTemplateTablePgsqlString = `CREATE TABLE template (
    version_id UUID PRIMARY KEY
    DEFAULT gen_random_uuid(),

    id UUID NOT NULL,

    person_name TEXT NOT NULL,
    membership_type TEXT NOT NULL,

    effective_period TSTZRANGE NOT NULL
    DEFAULT tstzrange(now(), NULL, '[)'),
    assertive_period TSTZRANGE NOT NULL
    DEFAULT tstzrange(now(), NULL, '[)'),

    EXCLUDE USING gist (
        id WITH =,
        effective_period WITH &&,
        assertive_period WITH &&
    )
    WHERE (upper_inf(assertive_period)),
    CHECK (NOT isempty(effective_period)),
    CHECK (NOT isempty(assertive_period))
);`

const patientFhirResourceJsonString = `{
    "resourceType" : "Patient",
    "identifier" : [{ Identifier }],
    "active" : <boolean>,
    "name" : [{ HumanName }],
    "telecom" : [{ ContactPoint }],
    "gender" : "<code>",
    "birthDate" : "<date>",
    "deceasedBoolean" : <boolean>,
    "deceasedDateTime" : "<dateTime>",
    "address" : [{ Address }],
    "maritalStatus" : { CodeableConcept },
    "multipleBirthBoolean" : <boolean>,
    "multipleBirthInteger" : <integer>,
    "photo" : [{ Attachment }],
    "contact" : [{
        "relationship" : [{ CodeableConcept }],
        "name" : { HumanName },
        "telecom" : [{ ContactPoint }],
        "address" : { Address },
        "gender" : "<code>",
        "organization" : { Reference(Organization) },
        "period" : { Period }
    }],
    "communication" : [{
        "language" : { CodeableConcept },
        "preferred" : <boolean>
    }],
    "generalPractitioner" : [{
        Reference(Organization|Practitioner|PractitionerRole)
    }],
    "managingOrganization" : { Reference(Organization) },
    "link" : [{
        "other" : { Reference(Patient|RelatedPerson) },
        "type" : "<code>"
    }]
}`

const patientTablePgsqlString = `CREATE TABLE patient (
    marital_status_id UUID,
);`

const patientNameTablePgsqlString = `CREATE TABLE patient_name (

    marital_status_id UUID,
);`

const patientIdentifierTablePgsqlString = `CREATE TABLE patient_identifier (

    marital_status_id UUID,
);`

const patientTelecomTablePgsqlString = `CREATE TABLE patient_telecom (

    marital_status_id UUID,
);`

const patientAddressTablePgsqlString = `CREATE TABLE patient_address (

    marital_status_id UUID,
);`

const patientContactTablePgsqlString = `CREATE TABLE patient_contact (

    marital_status_id UUID,
);`

const patientViewPgsqlString = `CREATE VIEW patient_view AS
SELECT
    p.id AS patient_id,
    p.marital_status_id,
    json_agg(DISTINCT pn) AS names,
    json_agg(DISTINCT pi) AS identifiers,
    json_agg(DISTINCT pt) AS telecoms,
    json_agg(DISTINCT pa) AS addresses,
    json_agg(DISTINCT pc) AS contacts
FROM patient p
LEFT JOIN patient_name pn ON pn.patient_id = p.id
LEFT JOIN patient_identifier pi ON pi.patient_id = p.id
LEFT JOIN patient_telecom pt ON pt.patient_id = p.id
LEFT JOIN patient_address pa ON pa.patient_id = p.id
LEFT JOIN patient_contact pc ON pc.patient_id = p.id
GROUP BY p.id;`

const snomedCtExampleString = `
    Body Structure (123037004)
        Anatomical or Acquired Body Structure (442083009)
            Anatomical Structure (91723000)
                Body Region Structure (52530000)
                    Entire Body Region (243928005)
                        Entire Subregion of Head (123852005)
    Clinical Finding (404684003)
        Disease (64572001)
            Abscess (128477000)
                Abscess of Limb (200755008)
                    Abscess of Lower Leg (609375004)
                        Abscess of Calf (10910001000004108)
    Procedure (71388002)
        Surgical Procedure (387713003)
            Grafting Procedure (119561005)
`

export {
    bitemporalTablePgsqlString,
    bitemporalTemplateTablePgsqlString,
    patientFhirResourceJsonString,
    patientTablePgsqlString,
    patientNameTablePgsqlString,
    patientIdentifierTablePgsqlString,
    patientTelecomTablePgsqlString,
    patientAddressTablePgsqlString,
    patientContactTablePgsqlString,
    patientViewPgsqlString,
    snomedCtExampleString,
}
