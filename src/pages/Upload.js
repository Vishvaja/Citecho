import React from 'react';

const Upload = () => {
    return (
        <div class="container">
            <div class="py-5 text-center">
                <img class="d-block mx-auto mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"></img>
                <h2>Upload Video</h2>
                <p class="lead">Enter the following details to upload your video.</p>
            </div>
                <div class="order-md-1 center">
                    <form class="needs-validation" novalidate>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label for="firstName">First name</label>
                                <input type="text" class="form-control" id="firstName" placeholder="First name" required></input>
                                <div class="invalid-feedback">
                                    Valid first name is required.
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="lastName">Last name</label>
                                <input type="text" class="form-control" id="lastName" placeholder="Last name" required></input>
                                <div class="invalid-feedback">
                                    Valid last name is required.
                                </div>
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="email">Email</label>
                            <input type="email" class="form-control" id="email" placeholder="you@example.com"></input>
                            <div class="invalid-feedback">
                                Please enter a valid email address.
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="address">Institution/Organization name</label>
                            <input type="text" class="form-control" id="org" placeholder="Institution name" required></input>
                            <div class="invalid-feedback">
                                Please enter your institution/organization name.
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="address">Title of research paper</label>
                            <input type="text" class="form-control" id="title" placeholder="Title of research paper" required></input>
                            <div class="invalid-feedback">
                                Please enter the title of your research paper.
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="address2">List of Authors<span class="text-muted">(Separated by semicolon)</span></label>
                            <input type="text" class="form-control" id="authors" placeholder="Jack Bill; Nat Blair" required></input>
                        </div>

                        <div class="row">
                        <div class="col-md-6 mb-3">
                                <label for="firstName">Date of Publication</label>
                                <input type="date" class="form-control" id="date" required></input>
                                <div class="invalid-feedback">
                                    Enter a valid date.
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="state">Publication type</label>
                                <select class="custom-select d-block w-100" id="type" required>
                                    <option value="">Choose...</option>
                                    <option>Journal Paper</option>
                                    <option>Conference Paper</option>
                                    <option>Technical Report</option>
                                    <option>Published Abstract</option>
                                    <option>Book Chapter</option>
                                    <option>Thesis</option>
                                    <option>Other</option>
                                </select>
                                <div class="invalid-feedback">
                                    Please choose a publication type.
                                </div>
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="address2">List any keywords or phrases that best describe the subject of your research<span class="text-muted">(Separated by comma)</span></label>
                            <input type="text" class="form-control" id="keywords" placeholder="keywords"></input>
                        </div>

                        <div class="mb-3">
                            <label for="address2">Link to publication</label>
                            <input type="text" class="form-control" id="link" placeholder="https://www.papers.com" required></input>
                            <div class="invalid-feedback">
                                    Please provide a link to your publication.
                                </div>
                        </div>

                        <div class="d-block my-3">
                            <label for="state">Do you grant us permission to publish your summary video to the Peereviewed platform?</label>
                            <div class="custom-control custom-radio">
                                <input id="yesp" name="yespublish" type="radio" class="custom-control-input" checked required></input>
                                <label class="custom-control-label" for="credit">Yes</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input id="nop" name="nopublish" type="radio" class="custom-control-input" required></input>
                                <label class="custom-control-label" for="debit">No</label>
                            </div>
                        </div>
                        <div class="d-block my-3">
                            <label for="state">I consent to my data being used to upload the video summary to the platform.</label>
                            <div class="custom-control custom-radio">
                                <input id="yesc" name="yesconsent" type="radio" class="custom-control-input" checked required></input>
                                <label class="custom-control-label" for="credit">Yes</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input id="noc" name="noconsent" type="radio" class="custom-control-input" required></input>
                                <label class="custom-control-label" for="debit">No</label>
                            </div>
                        </div>
                
                        <button class="btn btn-primary btn-lg btn-block" type="submit">Upload</button>
                    </form>
                </div>
        </div>
    );
};

export default Upload;
