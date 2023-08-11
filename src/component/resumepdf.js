import React from "react";
import { Page, Document, Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "Helvetica",
  },
  heading: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 12,
    marginBottom: 5,
  },
});

const ResumePDF = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.heading}>M I C H E L O B   R E V O L</Text>
        <Text>West Palm Beach, FL | mrevol2021@fau.edu | (561) 567-1891</Text>

        <Text style={styles.heading}>EDUCATION</Text>
        <Text>
          Bachelor of Science, Computer Science {"\n"}
          Florida Atlantic University - Boca Raton, FL {"\n"}
          GPA: 3.6
        </Text>

        <Text style={styles.heading}>ACADEMIC PROJECTS</Text>
        <Text>
          <Text>Property Management System (Principles of Software Engineering, Summer 2022)</Text>
          {"\n"}
          A website that emulates a property management system where users can register for accounts, login to register accounts,
          update personal information, store, retrieve, update, and delete Personal Inventories.
        </Text>
        <Text>
          <Text>Tail Together (iOS Mobile App Project, Fall 2022)</Text>
          {"\n"}
          An application that allows users to chat with each other on upcoming venues to meet new friends that have similar interest,
          have a pregame party, or just talk about the event.
        </Text>
        <Text>
          <Text>Movie App (Full Stack Web Development)</Text>
          {"\n"}
          The movie app is a project that provides users with a sleek and user-friendly interface to browse the most popular movies.
          Built using modern technologies such as React, Bootstrap, and TMDb API, the website offers a wide range of movie options to choose from.
          The backend is supported by Firebase and MongoDB, ensuring efficient storage and retrieval of user data.
        </Text>

        <Text style={styles.heading}>RELEVANT COURSEWORK</Text>
        <Text>
          Introduction to Programming, Foundations of Computer Science, Introduction to Internet Computing, Data Structures,
          Principles of Software Engineering, Computer Operating Systems, Theory of Computation, Mobile App, Full Stack Web Development, Intro to Deep Learning.
        </Text>

        <Text style={styles.heading}>SKILLS</Text>
        <Text>
          SQL, HTML, CSS, JavaScript, Swift, XCode, Parse, Firebase, C/C++, MongoDB, jQuery, Python
        </Text>

        <Text style={styles.heading}>EXPERIENCE</Text>
        <Text>
          Compounder, Oxygen Development, Aug 2020 - Current, West Palm Beach, FL {"\n"}
          - Mix different cosmetic powders together and other types of chemicals for makeup {"\n"}
          - Follow specific recipes and processes, stirring the correct amounts of materials together.
        </Text>

        <Text style={styles.heading}>LANGUAGES</Text>
        <Text>
          Spanish (Conversational), Haitian Creole (Native), French (Advanced), English (Fluent)
        </Text>
      </Page>
    </Document>
  );
};

export default ResumePDF;
