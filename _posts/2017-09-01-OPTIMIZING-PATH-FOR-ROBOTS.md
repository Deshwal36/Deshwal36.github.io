__INTRODUCTION__
---

The problem of motion planning in a robot system presents significant representational difficulties
that must be overcome, Motion planning systems need to reason about physical bodies and robot
motion in a continuous space.
we describe an approach that represents the path for robots by calculating the convex
hull using different algorithms.

This convex hull approach can be applied for multi robotic system by using algorithms for finding
hull for every robot and apply either inverted Dijkstra’s (taken destination point as source) or apply
Dijkstra’s for each robot individually &amp; find the shortest path.

An approach to robotics path planning, which allows optimization of useful
performance in the presence of obstacles, The main idea is to express obstacle avoidance in terms Of the distances between potentially colliding parts.

`Methodology`
---

*  Finding CONVEX HULL from out of given n points using Different Algorithms.

A convex hull is the shape that completely encloses a set of points with the fewest number of
perimeter nodes. There are two main properties of convex hulls that should be explored before
introducing Graham’s Scan or Jarvis’ March. One of these properties is that all of the points in the
final polygon must be indented outwards, or more formally, convex. If any points are concave, there
exists a better path by excluding that point, and drawing a direct line between its two neighbor
points, which reduces the overall perimeter point count by one,This property is exploited by Graham’s Scan.  

Another important property is that the most extreme point on any axis is part of the convex hull
>:-1. Jarvis March algorithm. Time.Complexity = O(mn)
>:-2.Graham’s algorithm. Time.Complexity = O(nlogn)

---

*  Finding shortest for Multi robotic system and computing Time complexity using different Data
structure for finding the optimal solution.

The optimal path is then obtained as a sequence of via points connecting the initial and the final
states by applying Dijkstra’s minimum cost algorithm. Contrary to most existing methodologies, the
computational complexity of this algorithm decreases with an increase in the number and/or the size
of the obstacles.

>:-1.Dijkstra’s algorithm T.C = O((V+E)logv)

---

Further aspect for Optimization:

Optimal path can be computed by using divide &amp; conquer approach for finding the convex hull
using some assumption for probability Distribution of n points in a space, That can be able to
minimize the Time complexity for finding hull to O(n)[In Linear Time].


***REFERENCES***

[1] Jss academy of technical education *Library section*, Noida  
[2] [SCIHUB](http://sci-hub.cc/)  
[3] [IEEE Research papers](http://www.ieee-ras.org/)  
