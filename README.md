# Belly Button Biodiversity

![Bacteria by filterforge.com](Images/bacteria.jpg)

Built an interactive dashboard to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare. The following outlines the steps taken.

- - -
## Step 1: Plotly

1. Used the D3 library to read in `samples.json`.

2. Created a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

  ![bar Chart](Images/hw01.png)

3. Created a bubble chart that displays each sample.

![Bubble Chart](Images/bubble_chart.png)

4. Created a Guage chart adapting from <https://plot.ly/javascript/gauge-charts/> to plot the weekly washing frequency of the individual. The values ranged from 0 through 9.

![Weekly Washing Frequency Gauge](Images/gauge.png)

5. Displayed each key-value pair from the metadata JSON object in the page, i.e., an individual's demographic information.

![hw](Images/hw03.png)

6. Updated all of the plots any time that a new sample is selected.

- - -

The final app looked like this =>

![hw](Images/hw02.png)

- - -
## Deployment

Deployed the app to GitHub's free static page hosting service.

- - -
### About the Data

Hulcr, J. et al.(2012) _A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable_. Retrieved from: [http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/](http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/)

- - -