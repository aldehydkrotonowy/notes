<a name="top"></a>
### Table of content
- [Heap Sort](#heapsort)
- [Merge Sort](#mergesort)
- [Insertion Sort](#insertion)

---

<a name="heapsort"></a>
### Heap Sort [[TOP]](#top) 
```cpp
// C++ program for implementation of Heap Sort
#include <iostream>
using namespace std;
 
// To heapify a subtree rooted with node i which is
// an index in arr[]. n is size of heap
void heapify(int arr[], int n, int i)
{
    int largest = i;  // Initialize largest as root
    int l = 2*i + 1;  // left = 2*i + 1
    int r = 2*i + 2;  // right = 2*i + 2
 
    // If left child is larger than root
    if (l < n && arr[l] > arr[largest])
        largest = l;
 
    // If right child is larger than largest so far
    if (r < n && arr[r] > arr[largest])
        largest = r;
 
    // If largest is not root
    if (largest != i)
    {
        swap(arr[i], arr[largest]);
 
        // Recursively heapify the affected sub-tree
        heapify(arr, n, largest);
    }
}
 
// main function to do heap sort
void heapSort(int arr[], int n)
{
    // Build heap (rearrange array)
    for (int i = n / 2 - 1; i >= 0; i--)
        heapify(arr, n, i);
 
    // One by one extract an element from heap
    for (int i=n-1; i>=0; i--)
    {
        // Move current root to end
        swap(arr[0], arr[i]);
 
        // call max heapify on the reduced heap
        heapify(arr, i, 0);
    }
}
 
/* A utility function to print array of size n */
void printArray(int arr[], int n)
{
    for (int i=0; i<n; ++i)
        cout << arr[i] << " ";
    cout << "\n";
}
 
// Driver program
int main()
{
    int arr[] = {12, 11, 13, 5, 6, 7};
    int n = sizeof(arr)/sizeof(arr[0]);
 
    heapSort(arr, n);
 
    cout << "Sorted array is \n";
    printArray(arr, n);
}
```

---

<a name="mergesort"></a>
### Merge Sort [[TOP]](#top) 

```cpp
/* C program for Merge Sort */
#include<stdlib.h>
#include<stdio.h>
 
// Merges two subarrays of arr[].
// First subarray is arr[l..m]
// Second subarray is arr[m+1..r]
void merge(int arr[], int l, int m, int r)
{
    int i, j, k;
    int n1 = m - l + 1;
    int n2 =  r - m;
 
    /* create temp arrays */
    int L[n1], R[n2];
 
    /* Copy data to temp arrays L[] and R[] */
    for (i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (j = 0; j < n2; j++)
        R[j] = arr[m + 1+ j];
 
    /* Merge the temp arrays back into arr[l..r]*/
    i = 0; // Initial index of first subarray
    j = 0; // Initial index of second subarray
    k = l; // Initial index of merged subarray
    while (i < n1 && j < n2)
    {
        if (L[i] <= R[j])
        {
            arr[k] = L[i];
            i++;
        }
        else
        {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
 
    /* Copy the remaining elements of L[], if there
       are any */
    while (i < n1)
    {
        arr[k] = L[i];
        i++;
        k++;
    }
 
    /* Copy the remaining elements of R[], if there
       are any */
    while (j < n2)
    {
        arr[k] = R[j];
        j++;
        k++;
    }
}
 
/* l is for left index and r is right index of the
   sub-array of arr to be sorted */
void mergeSort(int arr[], int l, int r)
{
    if (l < r)
    {
        // Same as (l+r)/2, but avoids overflow for
        // large l and h
        int m = l+(r-l)/2;
 
        // Sort first and second halves
        mergeSort(arr, l, m);
        mergeSort(arr, m+1, r);
 
        merge(arr, l, m, r);
    }
}
 
/* UTILITY FUNCTIONS */
/* Function to print an array */
void printArray(int A[], int size)
{
    int i;
    for (i=0; i < size; i++)
        printf("%d ", A[i]);
    printf("\n");
}
 
/* Driver program to test above functions */
int main()
{
    int arr[] = {12, 11, 13, 5, 6, 7};
    int arr_size = sizeof(arr)/sizeof(arr[0]);
 
    printf("Given array is \n");
    printArray(arr, arr_size);
 
    mergeSort(arr, 0, arr_size - 1);
 
    printf("\nSorted array is \n");
    printArray(arr, arr_size);
    return 0;
}
```

---

<a name="insertion"></a>
### Insertion Sort [[TOP]](#top) 
```cpp
// C program for insertion sort
#include <stdio.h>
#include <math.h>
 
/* Function to sort an array using insertion sort*/
void insertionSort(int arr[], int n)
{
   int i, key, j;
   for (i = 1; i < n; i++)
   {
       key = arr[i];
       j = i-1;
 
       /* Move elements of arr[0..i-1], that are
          greater than key, to one position ahead
          of their current position */
       while (j >= 0 && arr[j] > key)
       {
           arr[j+1] = arr[j];
           j = j-1;
       }
       arr[j+1] = key;
   }
}
 
// A utility function to print an array of size n
void printArray(int arr[], int n)
{
   int i;
   for (i=0; i < n; i++)
       printf("%d ", arr[i]);
   printf("\n");
}
 
 
 
/* Driver program to test insertion sort */
int main()
{
    int arr[] = {12, 11, 13, 5, 6};
    int n = sizeof(arr)/sizeof(arr[0]);
 
    insertionSort(arr, n);
    printArray(arr, n);
 
    return 0;
}
```