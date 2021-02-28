/**
 *  Implementation of binary search algorithm
 *  This algorithm works with lists of ordered values (vectors)
 *  When the values is ordered in the list, the binary search is faster than sequential search
 */

#include <stdio.h>
#include <stdlib.h>

// contants
#define SIZE 20


// This function represents the sequential search.
int sequencialSearch(int vector[SIZE], int item) {
  for (int index=0; index<SIZE; index++) {
    if(vector[index] == item) {
      // if found returns the position
      return index;
    }
  }
  // if not found a item, it returns -1
  return -1;  
}

// This function represents the binary search, 
int binarySearch(int vector[SIZE], int item) {
  int begin = 0; // always starts with 0  
  int end = SIZE -1; // always starts with last position of array
  
  while(begin <= end) {
    int index = (begin + end) / 2; // calculate half of the vector

    if(vector[index] == item) {
      return index;
    }

    if(vector[index] < item) {
      begin = index + 1;
    } else {
      end = index - 1;
    }
  }

  return -1;
}

int main() {
  int vector[SIZE] = {1,6,8,12,15,18,24,26,29,30,34,36,38,39,48,57,59,62,68,73}; // vector with 20 positions 

  int item = 24;

  printf("Result of binary search for %d: \t\t vector position: %d\n", item, binarySearch(vector, item));
  printf("Result of sequential search for %d: \t\t vector position: %d\n", item, sequencialSearch(vector, item));
}

