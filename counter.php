<?php
$counterFile = "counter.txt"; // File to store the visit count

// Check if the counter file exists
if (file_exists($counterFile)) {
    // Read the current count from the file
    $count = (int)file_get_contents($counterFile);

    // Increment the count by 1
    $count++;

    // Write the updated count back to the file
    file_put_contents($counterFile, $count);
} else {
    // If the counter file doesn't exist, create it with an initial count of 1
    file_put_contents($counterFile, 1);
}
?>
