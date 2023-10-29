# 📊 Project: Complex API 
![dnd5e ranger companion](https://user-images.githubusercontent.com/126501848/230806336-cd929bc3-3898-4cac-b40b-0508938dab57.png)
### Goal: Use data returned from one api to make a request to another api and display the data returned

This application allows you to generate a random pokemon for your Ranger Class in DND5e

Upon reaching level 3 in DND5e the ranger class is allowed to pick an animal companion. Sure you could have Eagle or a Wolf or an Owl but wouldn't you want a pikachu instead? The pokemon genearated is based on the hit die of the hunter found in the DND5e API which is then randomized and multiplied to respond with a number between 1 and 50. This data is then sent into a pokemon APi as a Poke-id which will give us the chosen pokemon! 

In an effort to make this slightly usable in a campaign i've also added stats for your new companion by giving them stats based on their actual pokemon stats and a health pool derived from their weight divided by 10. Some pokemon are HUGE and could cause some scaling issues. To remedy thisif their HP after calculation is above 50, it will be set to 50 as a max.
