/**
 * 
 * @param paths You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi. Return the destination city, that is, the city without any path outgoing to another city.

It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.

 

Example 1:

Input: paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
Output: "Sao Paulo" 
Explanation: Starting at "London" city you will reach "Sao Paulo" city which is the destination city. Your trip consist of: "London" -> "New York" -> "Lima" -> "Sao Paulo".

 * @returns 
 */

// this is a brute force approach (O(n^2)) - bad approach
// update to use hash set (O(n)) - good approach
function destCity(paths: string[][]): string {
  let destination = paths[0][1];
  let begins = [];
  let ends = [];

  for (let i = 0; i < paths.length; i++) {
    begins.push(paths[i][0]);
    if (paths[i][0] == destination) {
      destination = paths[i][1];
    }

    if (!begins.includes(paths[i][1])) {
      ends.push(paths[i][1]);
    }
  }

  // return begins.includes(destination) ? ends[ends.length - 1] : destination
  return ends.filter((item) => !begins.includes(item))[0];
}
