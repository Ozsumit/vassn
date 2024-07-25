let currentIndex = 0;
        const images = document.querySelectorAll('.gallery img');
        const totalImages = images.length;

        // Open the lightbox
        function openLightbox(event) {
            if (event.target.tagName === 'IMG') {
                const clickedIndex = Array.from(images).indexOf(event.target);
                currentIndex = clickedIndex;
                updateLightboxImage();
                document.getElementById('lightbox').style.display = 'flex';
                window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
                window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
                window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
                window.addEventListener('keydown', preventDefaultForScrollKeys, false);
            document.getElementById('footer').style.display = 'none';

            }
        }

        // Close the lightbox
        function closeLightbox() {
            document.getElementById('lightbox').style.display = 'none';
            document.getElementById('footer').style.display = 'flex';
           
        }

        // Change the lightbox image based on direction (1 for next, -1 for prev)
        function changeImage(direction) {
            currentIndex += direction;
            if (currentIndex >= totalImages) {
                currentIndex = 0;
            } else if (currentIndex < 0) {
                currentIndex = totalImages - 1;
            }
            updateLightboxImage();
        }

        // Update the lightbox image and thumbnails
        function updateLightboxImage() {
            const lightboxImg = document.getElementById('lightbox-img');
            const thumbnailContainer = document.getElementById('thumbnail-container');

            // Update the main lightbox image
            lightboxImg.src = images[currentIndex].src;

            // Clear existing thumbnails
            thumbnailContainer.innerHTML = '';

            // Add new thumbnails
            images.forEach((image, index) => {
                const thumbnail = document.createElement('img');
                thumbnail.src = image.src;
                thumbnail.alt = `Thumbnail ${index + 1}`;
                thumbnail.classList.add('thumbnail');
                thumbnail.addEventListener('click', () => updateMainImage(index));
                thumbnailContainer.appendChild(thumbnail);
            });

            // Highlight the current thumbnail
            const thumbnails = document.querySelectorAll('.thumbnail');
            thumbnails[currentIndex].classList.add('active-thumbnail');
        }

        // Update the main lightbox image when a thumbnail is clicked
        function updateMainImage(index) {
            currentIndex = index;
            updateLightboxImage();
        }

        // Add initial thumbnails
        updateLightboxImage();


        // To add keyboard navigation (left/right arrow keys)
        document.addEventListener('keydown', function (e) {
            if (document.getElementById('lightbox').style.display === 'flex') {
                if (e.key === 'ArrowLeft') {
                    changeImage(-1);
                } else if (e.key === 'ArrowRight') {
                    changeImage(1);
                }
                else if(e.key ==='Escape'){
                    closeLightbox()
                }
            }
        });function showdropdown() {
            const nav2 = document.getElementById("nav2");
            const dropdown = document.getElementById("dropdown");
            const navul = document.getElementById("navul");
            const header = document.querySelector("header");
            const body = document.body; // Add this line to select the body
        
            if (!nav2 || !dropdown || !navul || !header) {
                console.error("One or more elements not found");
                return;
            }
        
            const isHidden = getComputedStyle(nav2).display === 'none';
        
            nav2.style.display = isHidden ? 'grid' : 'none';
            dropdown.textContent = isHidden ? '✕' : '≡';
            navul.style.display = isHidden ? 'grid' : 'none';
        
            // Change the position of the header when nav2 is visible
            if (isHidden) {
                header.style.position = 'fixed';
                header.style.width = '100%';
                header.style.zIndex = '1000';
                body.style.overflow = 'hidden'; // Disable scrolling
            } else {
                header.style.position = 'absolute'; // or whatever the original position was
                body.style.overflow = ''; // Re-enable scrolling
            }
        }