// Given below the set of vertices and edges of a directed graph G (V, E)
// Represent the graph using adjacency matrix sayAdjmat[][].

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

int main()
{
    V = {1, 2, 3, 4, 5, 6};

    E = {(1,2), (1,3), (2,3), (2,4), (2,5), (3,4), (3, 6), (4,5), (4,6), (5,6) };
    int i, j;
    for (i = 0; i < V; i++)
    {
        for (j = 0; j < V; j++)
        {
            if (i == j)
            {
                adjmat[i][j] = 0;
            }
            else
            {
                adjmat[i][j] = 1;
            }
        }
    }
    for (i = 0; i < V; i++)
    {
        for (j = 0; j < V; j++)
        {
            printf("%d ", adjmat[i][j]);
        }
        printf("\n");
    }
    return 0;
}

