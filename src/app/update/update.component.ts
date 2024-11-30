import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../service/student.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [RouterModule,  FormsModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit {

  student: Student = { id: 0, name: '', course: '' };

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log("id",id)
    this.studentService.getStudentById(id).subscribe(data => this.student = data);
  }

  updateStudent(): void {
    this.studentService.updateStudent(this.student).subscribe(() => {
      this.router.navigate(['/list']);
    });
  }

}
