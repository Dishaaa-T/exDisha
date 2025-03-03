<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EventXpert - Advanced Campus Event Management</title>
    <!-- Font Awesome for icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Progress bar -->
    <div class="progress-container">
        <div class="progress-bar" id="progressBar"></div>
    </div>

    <!-- Notification container -->
    <div class="notification" id="notification">
        <i class="notification-icon fas"></i>
        <span class="notification-message"></span>
    </div>

    <div class="container">
        <!-- Left side with background and formulas -->
        <div class="left-side">
            <div id="particles-js"></div>
            
            <div class="formula-container">
                <div class="formula">QoXm</div>
                <div class="formula">E=hl NP</div>
                <div class="formula">M=m+5-5lg D</div>
                <div class="formula">F=ma</div>
                <div class="formula">A=mgh</div>
                <div class="formula">Σ</div>
                <div class="formula">P=pgh</div>
                <div class="formula">F=-kx</div>
            </div>
            
            <svg class="elephant-svg" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
                <path d="M400,150 C250,150 150,300 150,450 C150,600 275,700 400,700 C525,700 650,600 650,450 C650,300 550,150 400,150 Z" fill="white" opacity="0.2"/>
                <circle cx="320" cy="400" r="40" fill="white" opacity="0.5"/>
                <path d="M250,300 C300,250 350,200 400,200 C450,200 500,250 550,300" stroke="white" stroke-width="10" fill="none" opacity="0.3"/>
            </svg>
            
            <div class="left-content">
                <h1>Empower Your Campus Events</h1>
                <p>Streamline event management for colleges and universities with our cutting-edge platform</p>
            </div>
            
            <div class="constant-display">
            </div>
            
        </div>

        <!-- Right side with form -->
        <div class="right-side">
            <button class="theme-toggle" id="themeToggle">
                <i class="fas fa-moon"></i>
            </button>
            
            <div class="form-container">
                <div class="form-header">
                    <h2 class="form-title">Empower Your Campus Events with EventXpert</h2>
                    <p class="form-subtitle">Fill in the details to register your event</p>
                </div>
                
                <form id="event-form" method="POST">
                    <div class="floating-label">
                        <div class="input-container">
                            <i class="fas fa-university input-icon"></i>
                            <input type="text" id="college-name" name="college_name" class="form-control" placeholder=" " required>
                            <label for="college-name">College Name</label>
                        </div>
                        <div class="validation-message">Please enter your college name</div>
                    </div>
                    
                    <div class="floating-label">
                        <div class="input-container">
                            <i class="fas fa-phone input-icon"></i>
                            <input type="text" id="contact" name="contact" class="form-control" placeholder=" " required>
                            <label for="contact">Contact</label>
                        </div>
                        <div class="validation-message">Please enter a valid contact number</div>
                    </div>
                    
                    <div class="floating-label">
                        <div class="input-container">
                            <i class="fas fa-envelope input-icon"></i>
                            <input type="email" id="email" name="email" class="form-control" placeholder=" " required>
                            <label for="email">Email</label>
                        </div>
                        <div class="validation-message">Please enter a valid email address</div>
                    </div>
                    
                    <div class="floating-label">
                        <div class="input-container">
                            <i class="fas fa-map-marker-alt input-icon"></i>
                            <input type="text" id="address" name="address" class="form-control" placeholder=" " required>
                            <label for="address">Address</label>
                        </div>
                        <div class="validation-message">Please enter your address</div>
                    </div>
                    
                    <div class="floating-label">
                        <div class="input-container">
                            <i class="fas fa-calendar-alt input-icon"></i>
                            <input type="text" id="event-name" name="event_name" class="form-control" placeholder=" " required>
                            <label for="event-name">Event Name</label>
                        </div>
                        <div class="validation-message">Please enter the event name</div>
                    </div>
                    
                    <div class="floating-label">
                        <div class="input-container">
                            <i class="fas fa-id-card input-icon"></i>
                            <input type="text" id="event-id" name="eventid" class="form-control" placeholder=" " required>
                            <label for="event-id">Event ID</label>
                        </div>
                        <div class="validation-message">Please enter the event ID</div>
                    </div>
                    
                    <div class="floating-label">
                        <div class="input-container">
                            <i class="fas fa-map-pin input-icon"></i>
                            <input type="text" id="venue" name="venue" class="form-control" placeholder=" " required>
                            <label for="venue">Venue</label>
                        </div>
                        <div class="validation-message">Please enter the venue</div>
                    </div>
                    
                    <div class="floating-label">
                        <textarea id="event-description" name="description" class="form-control" placeholder=" " required></textarea>
                        <label for="event-description">Event Description</label>
                        <div class="validation-message">Please enter a description of the event</div>
                    </div>
                    
                    <div class="floating-label">
                        <div class="input-container">
                            <i class="fas fa-clock input-icon"></i>
                            <input type="datetime-local" id="datetime" name="datetime" class="form-control" required>
                            <label for="datetime" style="display: none;">Date and Time</label>
                        </div>
                        <div class="validation-message">Please select a date and time</div>
                    </div>
                    
                    <button type="submit" class="submit-btn" id="submitBtn" name="submit">
                        <div class="spinner"></div>
                        <span class="btn-text">Submit</span>
                    </button>
                </form>
            </div>
        </div>
    </div>

    <!-- Particles.js for background animation -->
    <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
    <script src = "script.js" ></script>
        <?php
        // Database configuration
        include 'connect.php';
        if(isset($_POST['submit'])){
            $college_name = $_POST['college_name'];
            $contact = $_POST['contact'];
            $email = $_POST['email'];
            $address = $_POST['address'];
            $event_name = $_POST['event_name'];
            $eventid = $_POST['eventid'];
            $venue = $_POST['venue'];
            $description = $_POST['description'];
            $datetime = $_POST['datetime'];
            $sql = "INSERT INTO user(college_name, contact, email, address, event_name, event_id, venue, description, datetime) VALUES ('$college_name', '$contact', '$email', '$address', '$event_name', '$eventid', '$venue', '$description', '$datetime');";
            if (mysqli_query($conn, $sql)) {
                echo '<script>alert("Event registered successfully!");</script>';
            } else {
                echo '<script>alert("Error: ' . mysqli_error($conn) . '");</script>';
        }
    }
        
        ?>
</body>
</html>