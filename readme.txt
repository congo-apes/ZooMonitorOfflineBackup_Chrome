This readme.txt file was generated on 20230621 by Hussein Aljorani and Jake Funkhouser with essential feedback and supervision by Crickette Sanz and David Morgan.


-------------------
GENERAL INFORMATION
-------------------


1. Title of Dataset: Browser Extensions for Zoo Monitor Offline jStorage Backup


2. Author Information


  Principal Investigator Contact Information
        Name: Hussein Aljorani 
	  Institution: Washington University in St. Louis, Congo Apes
	  Email: a.hussein@wustl.edu


  Associate or Co-investigator Contact Information
        Name: Jake Funkhouser
          Institution: Washington University in St. Louis; Goualougo Triangle Ape Project; University of Zurich
	  Email: jakefunkhouser@wustl.edu; jake.funkhouser@uzh.ch


  Associate or Co-investigator Contact Information
        Name: David Morgan
          Institution: Lincoln Park Zoo; Goualougo Triangle Ape Project


  Associate or Co-investigator Contact Information
        Name: Crickette Sanz
          Institution: Washington University in St. Louis; Wildlife Conservation Society; Goualougo Triangle Ape Project


3. Web broswer extensions designed to work with ZooMonitor.org 

Ross, M.R., Niemann, T., Wark, J.D., Heintz, M.R., Horrigan, A., Cronin, K.A., Shender, M.A., Gillespie, K. (2016). ZooMonitor (Version 1) [Mobile application software].


4. Zoo Monitor Support Contact
        Name: Jason Wark
          Institution: Lincoln Park Zoo: Animal Welfare Science Program
	  Email: jwark@lpzoo.org


5. Contextual description of the data: 

Google Chrome and Firefox web extensions that work to download browser web storage (jStorage) to backup collected data when offline without cloud access. 



--------------------------
SHARING/ACCESS INFORMATION
-------------------------- 


1. Licenses/restrictions placed on the data: http://creativecommons.org/licenses/by/4.0/


2. Links to publications that cite or use the data: NA


3. Links to other publicly accessible locations of the data: NA


4. Links/relationships to ancillary data sets: zoomonitor.org


5. Was data derived from another source? NA
           If yes, list source(s): NA



---------------------
README File for Web Extensions
---------------------


# Local Storage Saver (Chrome version)

LocalStorage Saver is a Google Chrome extension designed to assist users in exporting the localStorage of any website into a text file. 
This tool does not support an autosave feature.
It operates under Chrome's Manifest V3.

## Features

- Extracts the entire localStorage data from the currently active tab.
- Formats the extracted localStorage data into JSON format for better readability and further usage.
- Saves the localStorage data into a text file, which is automatically downloaded to the default download path of your browser.

## Setup

Here's a step-by-step guide on how to install and use LocalStorage Saver on Chrome:

1. Navigate to `Extensions -> Manage Extensions` in Google Chrome.
2. Toggle on `Developer Mode`.
3. Click `Load Unpacked`.
4. Navigate to and select the folder containing the LocalStorage Saver extension files, then click `Select`.
5. Click on the puzzle piece icon in the Chrome toolbar to view your extensions.
6. Pin the `LocalStorage Saver` extension for easy access.
7. Navigate to the site from which you want to save data.
8. Click the `Save Site's LocalStorage` button.

**Note:** The extension works only on the currently active tab.

## File Naming and Format

When the extension saves a text file, it names the file using the format `localStorageDump_<timestamp>_<siteName>.txt`.

- `<timestamp>`: A timestamp following the ISO 8601 standard, denoting the exact date and time when the data was dumped from the local storage. 
	It is in the format `YYYYMMDDTHHMMSSfffZ`.
    - `YYYY`: The 4-digit year.
    - `MM`: The 2-digit month.
    - `DD`: The 2-digit day.
    - `T`: Denotes the start of the time segment.
    - `HH`: The 2-digit hour (24-hour format).
    - `MM`: The 2-digit minute.
    - `SS`: The 2-digit second.
    - `fff`: The 3-digit millisecond.
    - `Z`: Indicates that the time is in Coordinated Universal Time (UTC).
	
- `<siteName>`: The title of the website from which the data was dumped.

For example, a file named `localStorageDump_20230621T174710418Z_google.com.txt` 
indicates that the local storage data was dumped from Google's website at the exact moment of `2023-06-21T17:47:10.418Z` (UTC time).

**Note:** This timestamp format ensures that you can accurately track when the data dump occurred, regardless of your geographical location.
