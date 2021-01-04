import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { NetlifyFormsService } from "../../service/netlify-forms/nelify-forms.service";

@Component({
  selector: "app-contactus",
  templateUrl: "./contactus.component.html",
  styleUrls: ["./contactus.component.css"],
})
export class ContactusComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private netlifyForms: NetlifyFormsService
  ) {}

  ngOnInit() {}

  feedbackForm = this.fb.group({
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    email: ["", [Validators.email, Validators.required]],
    type: ["", Validators.required],
    description: ["", Validators.required],
    rating: [0, Validators.min(1)],
  });

  errorMsg = "";

  closeError() {
    this.errorMsg = "";
  }

  onSubmit() {
    this.netlifyForms.submitFeedback(this.feedbackForm.value).subscribe(
      () => {
        this.feedbackForm.reset();
        console.log('sucess');
        this.router.navigateByUrl("/success");
      },
      (err) => {
        this.errorMsg = err;
      }
    );
  }
}
