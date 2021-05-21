![Hompage](/preview.png)

# Karpov | Korchnoi
## Visualizing Chess, Patterns and Paranoia

https://jamestroxel.github.io/karpovkorchnoi/#/prologue

### Abstract
This project analyzes two remarkably different chess matches played between Anatoly Karpov and Viktor Korchnoi. The first is game two from the 1974 Candidates Final in Moscow, which has come to be regarded as a modern classic in tactics, strategy, and chess brilliance. The second is the entire, bizarre 1978 World Chess Championship in the Philippines, which quickly earned notoriety as an example of the type of superstition, paranoia, and scandal commonly observed in chess lore throughout the game’s rich history. Analyzing chess as a game of fast pattern recognition processes, and slow search processes allows us to see how two fine specimens of Kasparov's “Drosophila of reasoning” became so consumed with fear and loathing in the Philippines, while having delivered a master class only four years prior. The roles of pattern recognition and time pressure are examined across these very different scenarios with supporting documentation from other historical accounts and written works on chess theory, statistics, and cognitive psychology. The visualizations that accompany the game analysis are designed to help readers see chess in the same way that a grandmaster does, and in so doing, help them to identify similarities between a grandmaster’s state of mind and their own. 

While reading this bizarre story in today’s exhausting, 24-hour, 280-character media landscape, it is worth asking: Are we under the same kind of pressure as a chess genius? Is this reasonable? What ways do chess prodigies respond to this pressure and what are the possible outcomes?

![page1](/1.png)
### Who is this for
Chess fans, statisticians and armchair psychologists.

### Code
This was made using mostly Vue and D3. The chessboard however, was made using [chessboardjs-vue](https://github.com/technoo0/chessboardjs-vue#readme). 

![page2](/2.png)
### Methodology
The data collected for this story ranges from textual data gathered from multiple first-hand, written accounts, to quantitative statistics found in game databases and academic research papers. But one thing I was struck by was the amount of available qualitative documentation of the 1978 World Chess Championship, versus the amount of quantitative data used to describe the 1974 match. While it is true that qualitative and quantitative data exist for both events, no one, to my knowledge, was as concerned about who was in the audience, what the weather was like, or  what each player ate in the 1974 match, as they were in the 1978 tournament. Conversely, while there are game analyses of the 1978 match, these are not nearly as common as the amount of books that cover game two of the 1974 Candidates Final, and are presented as if more for the sake of posterity  than to convey anything particularly revelatory. Embracing this fact by limiting the analysis of the 1978 match to mostly qualitative data, and the 1974 match to quantitative data, helped to underscore just how different these two matches were, as well as to support Sigman’s claim that chess, in its ideal state, functions within a vacuum, ignorant of any factors beyond the current board position.  

Capturing the tense absurdity of the 1978 melodrama involved compiling notes from a number of first-hand accounts, including those from Anatoly Karpov’s own From Baguio to Merano, The World Championship Matches of 1978 and 1981 and E.B. Edmondson’s Chess Scandals, The 1978 World Chess Championship. The narrative was reconstructed in a way that took tips from other whodunits ranging from the Warren Commission to the work of the firm, Forensic Architecture. The interactive diagram showing the seating positions of Doctors Zoukhar and Berginer is equal parts faithful retelling of a bizarre storyline, and tongue-in-cheek reference to the endless reconstructions of Dealy Plaza and the Texas School Book Depository that are so-often found in both the official and many, many unofficial investigations into who shot JFK. 

However, what originally clued me into the story of 1978 was Segal’s statistical analysis of an outlandish claim of Bobby Fischer’s in Chess, Chance and Conspiracy that also sparked a broader inquiry into the phenomenon of paranoia in grandmaster-level chess. Further investigation revealed a breadth of research into the roles of time pressure and pattern recognition. A link began to emerge between grandmasters who traded in conspiracy theories, and a reliance on pattern recognition at this level. Time pressure and high stress was identified as a significant catalyst.

#### Correlations Between Time Constraints and Player Rank
After reading The Effects of  Time Pressure on Chess Skill: An Investigation into Fast and Slow Processes Underlying Expert Performance, I reached out to the authors about obtaining the data used to generate figure 1, so that I might include it in my project. I brought the dataset into R and ran Pearsons R calculations to generate the appropriate correlations. One interesting discrepancy arose in doing this which resulted in a simple but significant change to the way the data was represented in my own project. In the original paper, the authors focus on the way that the strength of the relationship between rank and time controls decreases with higher titled players.*  This observation is used to claim that their research runs counter to much of the prior research done in this area. “The two studies reported here both show that while previous research has suggested that increasing the playing tempo during a game of chess will benefit the stronger player due to his decreased reliance on slow skills such as calculation of variations, data of online play and world championship matches indicates otherwise.” However, transposing the data to show the correlations grouped by title, rather than game format, makes it much clearer that the relationship between shorter time controls and chess rank is still a positive one, regardless of title.** While it is true that weaker players see wilder swings in their chess rankings under tighter time controls, this can easily be explained by the higher frequency of blunders seen in weaker players in general.   

#### Sankey Diagrams
Due to the significance of pattern recognition in much of the research cited, it was important to visualize the decision making of each player as one way to highlight the behavioral patterns so common to the game of chess. Tree diagrams have long been used as one way to represent the various paths a player can take, but the advent of online chess clubs and databases has given us the opportunity to give this information much greater context. Chessbase’s Database gives us access to data from eight million games, for example, and served as the source not only for my own research, but that of other papers cited here, including Segal’s Chess, Chance and Conspiracy. The ability to show the game distribution data of each move from Chessbase’s database gave additional weight to the moves Karpov and Korchnoi eventually made throughout the course of game two in 1974. This also made the sankey diagram well-suited to visualize this data, due to its ability to show distribution flows over time. However, it quickly became clear after working with the data that simply showing all of the possible moves at once would create an unintelligible knot of nodes and links. Figuring out a way to reduce this complexity was needed in order to maintain legibility and as much focus as possible on retracing the moves that were actually made. Being able to see the options in front of each player with every move is also helpful as a way to spot when deviations occur, as well as to show the “brain” of the game as it is taking place. 

As a result, the decision was made to first split the data into smaller chunks that only represented the current state of the board, with an abbreviated view of the possible ways forward, rather than all possible moves at once, from start to finish.  This was done by reducing the moves shown to that of the current move in the first column, the top five responses to this move in the second column, and then the top five responses to each of those moves in a third column, so that in the end, we are able to look ahead only two moves at a time. This limitation may at first appear to run counter to the specified aim of visualizing chess “in the same way a grandmaster does,” but compartmentalizing information is still an important part of seeing the forest for the trees. I arrived at the number five simply by testing the data to get a sense of how many possibilities could be shown at once without vertical space and legibility becoming serious issues. Because of this more surgical approach to the required data, collecting this data manually, although time consuming, made the most sense.
As we follow the game from its root, first move, to its outer-most branch, the amount of game data distributed across the narrowing list of viable moves becomes less and less. The weakening precedent makes this type of visualization more helpful in the opening stage of the game than in the middle game and this is why we see this visualization drop out at move 11. The programmatic nature of the opening stages of the game are also reflected in the fact that Karpov’s own game annotation has very little to say about any individual moves until about move 16, which is where the annotations begin to take the place of the sankey diagrams.

#### Stockfish Board Evaluation
Chess engines evaluate each board position as a way of ranking each possible move and choosing the best one. This returns a value that can also be useful both in tracking the performance of each player and adding color to other game statistics. The Stockfish game engine is known to be one of the top engines, and is available for use in Chessbase’s own game interface. This is where I gathered the data to create the bars that visualize the score, for or against each player, found at the bottom of the screen. 

#### Encyclopedia of Chess Openings
The data used to show examples of different openings is pulled from 365chess.com in order to retrieve the Forsyth–Edwards Notation (FEN) string that chessboard.js requires to generate each board position. 365chess.com references the standardized classifications for each opening found in the Encyclopedia of Chess Openings (ECO). Here, each opening can be referred to by a specific name and alpha numeric code. For example, the “Scotch Game” is  also known as “C45”, while the “Queen’s Gambit Declined Slav accepted, Alapin variation” is referred to as “D16.”

![page3](/3.png)
