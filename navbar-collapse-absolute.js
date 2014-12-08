/* ===============================================================
 * Bootstrap Navbar Collapse Absolute: navbar-collapse-absolute.js
 * ===============================================================
 * Copyright 2012-2014 José Carlos Chávez <jcchavezs@gmail.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


jQuery(document).ready(function($) {
	function navbarCollapseAbsoluteGetTarget(e) {
	    var targetSelector = $(e).data('target');

	    if (typeof targetSelector == 'undefined') {
	        targetSelector = 'body';
	    }

	    return targetSelector;
	}

    $('.navbar-collapse-absolute').each(function(i, e) {
    	containerSelector = navbarCollapseAbsoluteGetTarget(e);

        $(containerSelector).append('<div class="navbar-collapse-absolute-overlay" />');
    });

    $('.navbar-collapse-absolute').on('hidden.bs.collapse show.bs.collapse', function(evt) {
        var containerSelector = navbarCollapseAbsoluteGetTarget(evt.target);

       	$(containerSelector).toggleClass('navbar-collapse-absolute-in');
    });
});