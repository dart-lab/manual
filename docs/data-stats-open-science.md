---
title: Data, Stats, & Open Science

---
# Data Storage

## Data storage systems and definitions

_by Sue Fletcher-Watson and Reesha Zahir_

University staff and students have access to a number of different online services and platforms for your data storing, managing, and analysing needs. The university's [Digital Research Services](https://www.digitalresearchservices.ed.ac.uk/ "DRS ") webpage is a good first port of call if you are looking to find out which services you can access. The webpage can direct you to all the available resources based on whether you are looking to:

1. Plan and design your research
2. Collect and capture your data
3. Organise and store your data
4. Interpret and analyse your data
5. Manage and preserve your data
6. Publish and share your data
7. Discover or reuse data

You can also check out [these videos](https://media.ed.ac.uk/media/ResearchComputing_by_MikeWallis/1_supsji1w "webinar") from a webinar hosted by the Digital Research Services, where they summarised some of the services they offer in a series of short talks.

In the sections below, we have included further information on the data storing systems that DART lab members frequently use.

### Data Storage for Individual Researchers

DataStore is a secure location for active research data (i.e. data that you are working with during the course of a project). All research staff and postgraduate research students have 500GB allocated to them for this purpose. You can find out more about accessing your DataStore [here](https://www.ed.ac.uk/information-services/computing/desktop-personal/connect-uni-file-storage "https://www.ed.ac.uk/information-services/computing/desktop-personal/connect-uni-file-storage").

Please note that as a member of the university you will also have access to storage space via OneDrive. **This should not be used to store raw or identifiable research data.** Such data should be stored on DataStore or one of the shared drives discussed below.

### Shared Drives on the University Server

The University Information Services can create shared folders on University servers. These are just like regular folders on your work computer, but they are also available on the desktops of other folder members. Folders need to be created by emailing the IS helpline. You should give them the UUN (University UserName) of anyone who you want to be able to access the folder -- access is by invitation only. Folders are not accessible outside the University -- though you will be able to access them at home / on your laptop if you link to the [VPN](https://www.ed.ac.uk/information-services/computing/desktop-personal/vpn).

Shared drives are useful for project master files with finalised project documents such as standard operating procedures; site files for clinical trials; storing data which only needs to be shared with other UoE staff.

If you use a PC new shared drives should appear automatically on your desktop at login. If you use a Mac you may need to network the shared drives by going to Finder > Go > Connect to Server... and then pasting in the file pathway which IS will send to you when you set it up / join the folder. It is worth saving this pathway.

#### [DataSync](https://datasync.ed.ac.uk/)

A Dropbox-like file hosting service for staff and postgrad students. Activate at the link above, using your EASE username and password. Up to 20GB of data is stored at the University of Edinburgh and managed by Information Services.

DataSync is useful for: project folders that you want to share with people outside the University who either don't have Dropbox or don't want Dropbox; sharing folders which exceed the free Dropbox folder limit; sharing and synchronising files across multiple devices including your mobile. [There is more information here](https://www.ed.ac.uk/information-services/computing/desktop-personal/datasync).

You can access DataSync through your browser or create a file on your desktop that automatically syncs new content. The [desktop version uses a client called OwnCloud](https://www.ed.ac.uk/information-services/computing/desktop-personal/datasync/desktop-clients)  
that you download to your computer, and is also available [for mobile devices](https://www.ed.ac.uk/information-services/computing/desktop-personal/datasync/mobile-clients). When using Own Cloud: if you add or edit a file in one place it is copied / the change is propogated to the other place(s); if a file is deleted in one place, it is deleted in all places. The system offers some ability for you to restore files that you have deleted (within 10 days)

You can [share individual DataSync files or folders](https://www.ed.ac.uk/information-services/computing/desktop-personal/datasync/sharing) with people within and outside the University.

#### [DataShare](https://datashare.is.ed.ac.uk/)

DataShare is for making a data set publicly available once a project is completed. UoE staff can set up an account with their EASE login but collaborators need to apply for an "EASE Friend" account. There is [information on how to deposit data here](https://www.ed.ac.uk/information-services/research-support/research-data-service/sharing-preserving-data/data-repository/how-to-deposit). Before depositing any data you should [follow this checklist](https://www.ed.ac.uk/information-services/research-support/research-data-service/sharing-preserving-data/data-repository/checklist) and discuss all the items with a colleague.

#### [DataVault](https://datavault.ed.ac.uk/)

DataVault is for long-term, private and secure storage of a finalised, "golden copy" dataset, once a project is completed. UoE staff can set up an account with their EASE login. There is [information on how to deposit data here](https://www.ed.ac.uk/information-services/research-support/research-data-service/sharing-preserving-data/datavault). The data are archived and you can set a date to have the data securely destroyed if you wish.

### Further information

The [research data service webpage](https://www.ed.ac.uk/information-services/research-support/research-data-service/sharing-preserving-data) has lots of useful information about all of the above services and more.

There is also a [Data Access and Governance committee](https://www.ed.ac.uk/clinical-brain-sciences/data-access-governance) in CCBS who might be able ot help if you have queries.

## Data Management & Protection

_By Sue Fletcher-Watson_

### Data Management: file types

1. An identifiable data master file (probably Excel, one row per
   participant) containing any identifiable information such as
   participant contact details, and notes on the latest contact you've
   had with them. This will also contain a note of participant codes
   for your study. Consider using multiple tabs to record different
   types of information -- for example if you want to include notes on
   each timepoint of a longitudinal study.
2. A pseudonymised master file containing pseudonymised data listing
   the participant codes and their research data -- such as
   questionnaire scores, reaction times or survey responses. Consider
   using separate tabs to record individual questionnaire item scores
   and then putting only total / sub-scale scores on your main data
   tab. Include a glossary to define any variable labels and a table
   with notes recording any scoring or labelling conventions -- e.g. 1
   = female, 2 = male.
3. Raw data files for each individual participant. Save these in an
   individual participant folder, labelled with their participant code
   and use the same code for each individual file. Raw data files might
   include raw eye-tracker output, audio or video recordings, or
   interview transcripts.
4. Specific project analysis files. If you want to do some data
   combination or modification (e.g. convert raw eye-tracking variables
   into a summary score; combine survey items into a scale) you may
   wish to consider taking the pseudonymised master file, duplicating
   and re-saving it in a separate folder labelled with your sub-project
   / sub-analysis. E.g. "Ginnell Habituation Analysis". This way you
   can adapt the data, delete variables you don't need and combine
   scores in novel ways without messing with the master file. NEVER
   delete participant rows -- just use colour coding in excel, case
   selection in SPSS, or something in R to de-select those cases that
   you don't need for your analysis.

### Rules for good data management:

* If in doubt, password protect a file (see below for how to do this)
* Develop a template master database, thoroughly and carefully. Use
  dummy data to check it. Then use that template and aim to only ever
  have ONE master data file for your project. You can add rows and
  columns, but should aim to never remove information.
* Label your participants using a convention such as
  Participant_studyname_number. For example: P_CE_001 Make sure
  that the number has enough digits to encompass all potential future
  participants. Avoid coding group status within the participant code
  (e.g. A for Autistic) as this make the code unnecessarily revealing
  about the participant.
* Label your study master file using a similar convention. E.g.
  MasterData_ClickEast_blind If your study doesn't have a catchy
  name, using your name or initials might be better.

### To password protect a file in Excel:

Select Save As > Select Options > Choose a password > confirm your password. You can also consider adding a different password for modification of the file, to make it harder for people to accidentally edit your master data. Strong but memorable passwords can be created using unpredictable but thematically-linked word strings. E.g. chocolatebeachpilates (based on three favourite things). You can also use the first letters of a sentence -- such as a favourite song lyric -- and including relevant symbols or punctuation. E.g. Ror&wok!Bck&wwm (Raindrops on roses and whiskers on kittens! Bright copper kettles and warm woollen mittens).

### To encrypt a file using Veracrypt:

You can safely encrypt files using a free online programme, recommended for encryption by our IT service, called [VeraCrypt](https://veracrypt.codeplex.com/) Full instructions can be found in the [VeraCrypt "beginner's instructions" pages](https://veracrypt.codeplex.com/wikipage?title=Beginner%27s%20Tutorial). This works by creating an encrypted package, or folder, into which you can put individual files you want to encrypt. You will set the folder size in advance so check how much your files are in total. You will create a decryption key (i.e. password) which will be used to unlock (or "mount") the encrypted folder.

When advising colleagues on how to access a previously-encrypted file, you can tell them to download the software and then [scroll down to step 13 on the beginner's instructions](https://veracrypt.codeplex.com/wikipage?title=Beginner%27s%20Tutorial),
which shows you how to mount a volume and access the contents.

Files which have been encrypted in this way can be shared with anyone including as an email attachment, via Dropbox and on a USB. However, when you send the file you should send the decryption key separately -- e.g. text them the decryption but send the folder by email. Or email the decryption but send the file via DataSync.

# Data Sharing

## Sharing project information with collaborators

_By Bethan Dean_

**NB: Data storage systems are listed in the preceding section.** Some
of these -- DataSync and Shared Drives - may also be useful for sharing
project information.

#### [DropBox](https://www.dropbox.com/?landing=dbv2)

DropBox is an independent private file-sharing service which is not
owned by the University. DropBox servers are based outside the EU and
the service is not approved for data storage or sharing. You can sign up
for free but will have to pay if you want more storage space. The basic
account only provides 2GB of storage.

Dropbox is useful for sharing project materials that are non-sensitive
such as Gantt charts, draft standard operating procedures, draft article
manuscripts and meeting agendas and minutes. You should not use Dropbox
to store or share data including: video or audio recordings; Excel, SPSS
or .csv files; scanned copies of paper data.

#### [Wiki Service](https://www.ed.ac.uk/information-services/computing/comms-and-collab/central-wiki)

A wiki is a type of website that allows user to collaboratively create
and maintain content. The UoE Wiki is based on the Confluence software
platform. Users log into it via EASE and it is automatically populated
with all staff, students and visitors to the University. Any member of
the University -- staff, students and 'staff like' visitors may own any
number of Wikis in the University space.

The owner has control and responsibility for the use of the Wiki, i.e.
content moderation, authorisation of users, etc. Collaborators/users
from outside the University may be given write access to the wiki by the
owner or delegated administrator. In order to log into the wiki,
external users will require an EASE Friend account. There is no enforced
size limit for a single Wiki space; however, individual attachments
cannot exceed 30MB. The Wiki is available from anywhere in the world.

Wikis are good for: sharing content with collaborators _and the public,_
when that content is not sensitive. It should not be used to share
research data.

#### [University of Edinburgh Sharepoint](https://uoe.sharepoint.com/SitePages/Home.aspx)

Sharepoint is a web-based product which enables you to collaborate and
communicate with other team members, departmental colleagues or research
project/working groups by storing files and information in one location.
It is done through **OneDrive for Business**, which is an integral part
of Office 365, or SharePoint Server.

Sharepoint has the following advantages: Eliminates need to circulate
documents via email; Enables users to control access to sensitive data
using permissions; OneDrive allows you to store up to 1Tbyte of
documents; Can be accessed from any computer.

# GDPR

## What is it?

There's detailed information on the UoE [Data Protection webpages](http://www.ed.ac.uk/records-management/gdpr), and on their [Sharepoint webpage](https://uoe.sharepoint.com/sites/DataProcessingRegisters/ "UoE Data Protection Sharepoint").

**Questions & Advice:** Contact UoE Data Protection Officer Dr Rena Gertz - [Rena.Gertz@ed.ac.uk](mailto:Rena.Gertz@ed.ac.uk).

### Basic Principles

GDPR affects how we handle and store personal and sensitive data. Personal data means anything that can identify an individual: Name, address etc., but also photographs/videos and voice recordings. Sensitive data includes health data, race/sexuality/sex/gender etc. data, but also things like political beliefs.

In general, make sure you **MINIMISE** what you collect. Collect strictly only what is necessary for whatever you're trying to achieve. Be **TRANSPARENT** about why you are collecting it. Don't forget to **DESTROY** it after the stated retention time.

## GDPR training

1. [Data protection](https://www.ed.ac.uk/records-management/training/data-protection)
2. [Information security](https://www.ed.ac.uk/infosec/learning-about-protection/register-information-security-essentials)
3. [DP Training Research (search for this on LEARN)](https://www.learn.ed.ac.uk/)

[**Data Protection Impact Assessments (DPIA)**](http://www.ed.ac.uk/records-management/guidance/checklist/data-protection-impact-assessment)**:** You must conduct a DPIA when commencing a new project, be it research / procurement / event / newsletter etc.

[**GDPR checklist**](https://www.ed.ac.uk/files/atoms/files/gdpr_checklist_ccbs.pdf): If processing personal information is a key part of your role (PIs! Event organisers! Admin & comms staff!) please refer to the GDPR Checklist and make sure everything you are doing is GDPR compliant

# Statistics resources

## University of Edinburgh Resources

1. **The Institute of Academic Development runs** [**1-1 statistics clinics**](https://www.ed.ac.uk/institute-academic-development/postgraduate/doctoral/courses/themes)**.** We've also heard tell of a statistics clinic that takes place in the Main Library... watch this space for more info
2. It is possible to "pitch" a project that involves data analysis to students in the Maths department -- ask Sue for more details
3. [**R Ladies has an Edinburgh chapter**](https://www.meetup.com/rladies-edinburgh/), where you can go along to get advice and guidance, and swap tips, on using R:  
   R-Ladies Edinburgh welcomes members of all R proficiency levels, whether you're a new or aspiring R user, or an experienced R programmer interested in mentoring, networking & expert upskilling. Our community is designed to develop our members' R skills & knowledge through social, collaborative learning & sharing. Supporting minority identity access to STEM skills & careers, the Free Software Movement, and contributing to the global R community!  
   (Just a note to say that despite the name, this group are very very inclusive: "We are pro-actively inclusive of queer, trans, and all minority identities, with additional sensitivity to intersectional identities. Our priority is to provide a safe community space for anyone identifying as a minority gender who is interested in and/or working with R.")
4. **The** [**Research Data Service**](https://www.ed.ac.uk/information-services/research-support/research-data-service/training) run courses including Handling Data Using SPSS:  
   Computer Lab-based, hands on workshop - No prior experience or preparation required. The aim of this half-day course is to show you how the facilities provided by SPSS can help with the management of your research data, demonstrating the benefits of using SPSS syntax-driven commands
5. **Crispin Jordan** provides [stats support at a drop-in clinic](https://crispinjordan.weebly.com/data-analysis-help.html) - follow the link to see available dates and to book a slot.
6. Places to approach for paid stats support for projects that have available budget include the [**Edinburgh Clinical Trials Unit**](https://www.ed.ac.uk/usher/edinburgh-clinical-trials) and the [**Edinburgh Clinical Research
   Facility**](https://www.edinburghcrf.ed.ac.uk/).
7. [**AQMEN**](http://www.aqmen.ac.uk/) (the Applied Quantitative Methods Network) runs training courses on statistical methods and data analysis.

## General Online Resources

1. [**DataCamp**](https://www.datacamp.com/) provide online training on statistical analysis.
2. The [**Laerd Statistics website **](https://statistics.laerd.com/)provides a subscription service for access to statistics guidance and support, for £5 per month for a 3-month subscription. We could probably cover the cost of this, provided they are registered as a supplier for the University.
3. [**G-Power is free software**](http://www.psychologie.hhu.de/arbeitsgruppen/allgemeine-psychologie-und-arbeitspsychologie/gpower.html) that you can download that provides basically all the power calculations you ever need.
4. Online calculator - [power analysis with cross random effects](https://jakewestfall.shinyapps.io/crossedpower/)
5. Tutorial - [a worksheet on repeated measures ANCOVA](http://www.bbk.ac.uk/psychology/dnl/stats/Repeated_Measures_ANCOVA.html) and managing covariates
6. Tutorial - an interactive [visualisation of p-value distributions](http://rpsychologist.com/d3/pdist/)
7. If you're interested in Bayesian analysis then:
   * Here are some [slides](https://osf.io/mhe5b/) from a Bayes course Catherine went to, and recommended.
   * The free software for Bayes is [JASP](https://jasp-stats.org/).

### Using R - beginners

1. An [online book](http://www.fon.hum.uva.nl/paul/lot2015/Navarro2014.pdf) called _Learning Statistics with R: A tutorial for psychology students and
   other beginners._ There are other version of the same book, and related resources [at this website](https://learningstatisticswithr.com/)
2. Code Academy runs a [free online course](https://www.codecademy.com/learn/learn-r) for learning to use R.
3. University of Edinburgh Coding Club - [Our Coding Club](https://ourcodingclub.github.io/ "our coding club") - runs a range of in- person/zoom training workshops for R and Python, plus they have a range on online tutorials and courses - these range in difficulty but most are accessible right from beginner level.

### Using R - more sophisticated resources

1. Some example data and [code for plotting summaries of data](https://github.com/ecsalomon/summaryPlotting)
2. A [tutorial on using ggplot2](http://varianceexplained.org/RData/code/code_lesson2/) for data visualisation

### Open Science Analysis Tools

1. Coding - [a friendly introduction toGitHub](http://joeyklee.github.io/friendly-github-intro/)

# Open & Reproducible Science

## Open & Reproducible Science Resources

* Information about the [FAIR principles of data science](https://www.go-fair.org/fair-principles/): data should be
  Findable, Accessible, Interoperable and Reuseable
* \[Research Cultures Integrity, Reproducibility and Open Research event recording\](https://uoe.sharepoint.com/sites/ResearchSupportOfficeIntelligence/Shared Documents/Forms/AllItems.aspx?id=%2Fsites%2FResearchSupportOfficeIntelligence%2FShared Documents%2FResearch Policy%2FResearch Evaluation%2FRCWG December Event%2Emp4&parent=%2Fsites%2FResearchSupportOfficeIntelligence%2FShared Documents%2FResearch Policy%2FResearch Evaluation). Topics covered in this series of talks include: the role of research metrics, assessment and research practices and how these impact research culture, research integrity, and reproducibility
* [Edinburgh ReproducibiliTEA](https://www.ed.ac.uk/information-services/about/organisation/library-and-collections/open-research/reproducibilitea) runs regular talks/discussion groups on open & reproducible science practices.

## Quick intro to the Open Science Framework (OSF)

_By Reesha Zahir_

### What is it?

The OSF is a free open-source software project that facilitates open collaboration in science research.

### What can you do with it?

* You can **pre-register** your research paper on the Open Science Framework. They have a variety of pre-registration templates suitable for all kinds of research. You can also pre-register your posters and presentations for conferences
* You can **collaboratively work** on research projects. All the ongoing research projects in a lab can be managed through the OSF. The projects can be interlinked (or not), and the platform can store (in editable form) the data collected for each project, lab manuals, protocols, etc.

### How do I pre-register my paper on OSF?

* The first step is to [create an OSF account](https://help.osf.io/article/271-create-an-osf-account "Create an OSF account"). You can use your ORCID, institutional login, or any email address to create an account
* Once you have your account, you can find detailed instructions on how to create a pre-registration from scratch [here](https://help.osf.io/article/162-start-a-registration#start-a-registration-from-scratch "pre-reg from scratch")
* The website also hosts a variety of [pre-registration templates](https://osf.io/zab38/wiki/home/ "pre-reg template") suitable for different types of projects
* You can [collaborate with colleagues](https://help.osf.io/article/379-collaborating-on-registrations "collaboration") when drafting your pre-reg, with different permission levels assigned to different authors
* Already submitted your pre-reg but need to change it due to unexpected circumstances? Don't worry, [it's easy to update it](https://help.osf.io/article/112-starting-an-update "how to update"). However, it's important to think carefully about the [rationale for your update](https://help.osf.io/article/110-introduction-to-updating "update intro")

If you need more info, the [OSF support FAQ page](https://help.osf.io/article/550-registration-and-preregistration-faq-s "FAQs") might be helpful!

## Responsible Analysis

_By Sue FW_

These notes come from a discussion we had during lab-group about what tools we have at our disposal to prevent p-hacking and ensuring we are analysing data responsibly and transparently. We identified 6 ways to be responsible in our statistical analyses, and their reporting:

1. **Pre-register your analyses** -- even if you can't do a registered report, think about publishing a protocol outlining your analysis plan in detail. This will save time later on and demonstrate transparency, and it goes some way to prevent inadvertent p-hacking.
2. **Report effect sizes as well as p-values** and base your interpretation more on the former (indicating the size of any difference -- is it trivial? Is it meaningful?) rather than the latter. Effect sizes are more robust to sample size changes and therefore especially good when analysing an under-powered data set. You can also use Bayesian statistics which explicitly evaluate whether an effect size is likely to be a "true" effect.
3. **Report confidence intervals for any differences**, allowing your reader to examine the full range of possible sizes-of-difference that are compatible with your data. If even the smallest difference estimate (lowest bound of your confidence interval) is greater than zero you can be very confident that your detected effect is a "true" effect. When interpreting data -- especially when looking for _clinical_ as well as _statistical_ significance, consider the range of possible effects that are compatible with your data.
4. **Make sure you correct for multiple tests**, by reducing the required p-value in proportion with the number of tests being carried out. This especially applies when performing multiple tests on the same variables -- e.g. a large correlation matrix
5. **Validate your analysis in a second data set**. This is very hard for us as our data are often quite unique but sometimes it's possible to leave out a proportion of your data for cross-validation checks. To aid in this goal for the field as a whole, we should be promoting and seeking protocol harmonisation, whereby multiple research teams use the same / overlapping data collection protocols on their samples.
6. **Visualise your data** and take the time to get to know its shape. Don't be afraid to include narrative descriptions of your data as well as statistical tests

Finally, it is worth noting that all of these responsible data plans are jeopardised when preparing analyses for conferences. Often a conference abstract, and sometimes also the conference presentation, will feature an interim analysis which is rushed and dictated by the conference timeline. As a result, we should not place a lot of weight on either our own, or others' conference findings, but instead use them as an opportunity to get feedback on our methods and rehearse analysis pathways which might contribute usefully to our pre-registration.