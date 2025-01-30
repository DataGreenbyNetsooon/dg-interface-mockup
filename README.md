# DataGreen Telemetry

This project is a React-based dashboard designed for monitoring sensor data, logs, and telemetry trends. The dashboard is styled with Tailwind CSS and uses mock data for showcasing features. It is built as part of a demo interface for DataGreen.

---
## The project uses mathematically-made mock data
---

## Features

- **Dashboard Overview**:
  - Quick stats: Active Sensors, Logs Processed Today, Anomalies Detected.
  - Visual indicators for sensor performance and status.
  - Quick actions section.
  - Mock news have been added to furnish the page.

- **Side Menu**:
  - Navigate to the different sections.

- **Sensors**:
  - Give a quick overview of the active sensors.
  - Upon clicking on it, give a detailed view through a chart design reporting the mock data.
  - Detailed view has a time-span filter.
  - Updates every 10 seconds to add a data point (still mocked), and pushes it.

- **Telemetry Trends**:
  - Graphs showcasing mock telemetry data for different sensor types, such as temperature, humidity, CPU usage, etc.
  - Performance indicators: Alerts for high/low metrics.

- **Anomalies**:
  - Anomalies will be brought to this section for better visibility.
  - Added a filter and a sort function.
  - Added a test function to extract data in a .csv file.

- **Logs**: 
  - Logs have been added to furnish the page.
  - Added a pagination function.

---

## Setup Instructions

1. **Clone the repo**:
    ```bash
    git clone git@github.com:DataGreenbyNetsooon/dg-interface-mockup.git
    ```

2. **Install dependencies with npm**:
    ```bash
    npm install
    ```

3. **Run the development server**:
    ```bash
    npm run dev
    ```

4. **Open the application**:
    - Ctrl+Click on the localhost link showing in the terminal

---

## Technologies Used

- ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) Frontend library.
- ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) Navigation between pages.
- ![Chart.js](https://img.shields.io/badge/Chart.js-F5788D?style=for-the-badge&logo=chart.js&logoColor=white) Rendering telemetry graphs.
- ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) Styling the interface.
- ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) Fast development and build tooling.

---

### Known issues

- **Non-scalable as it is**: the whole data is loaded. For better scalability, need to load pack per pack, and have a functionality to allow loading everything (thinking about logs specifically).
- **Export data**: function is funky, .csv formatting is not consistent - to be worked on.
- **Anomalies -> Show details button**: is expanding every boxes.
- **Responsiveness**: can be looked further in details but de-prioritized.

### Further ideas

- **Side menu**: make it sticky, as in Trends menu, scrolling down hide the side menu completely. Maybe work on a function to hold the side bar in place (either position:fixed, or make it move accordingly to the scroll).
- **Rework top-right menu**: make it more cohesive with the rest, avoid repetition between the top menu and the side menu.
- **Notification system**: could be an e-mail notification system that you could apply/subscribe to: allow the system to send an email to a distro list when anomalies are detected.
- **Chat-bot**: this is a system I will need a long time to work on as I have never done before, and chat bot vulnerabilities are vast and sensitive. But remains an interesting idea.
